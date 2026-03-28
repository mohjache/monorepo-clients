"use server";

import { Resend } from "resend";
import { z } from "zod";

import { env } from "~/env";

export type WaitlistActionState = {
	status: "idle" | "success" | "error";
	message: string;
};

const waitlistSchema = z.object({
	email: z.string().trim().email("Enter a valid email address."),
});

function isResendConfigured() {
	return Boolean(
		env.RESEND_API_KEY && env.RESEND_SEGMENT_ID && env.RESEND_FROM_EMAIL,
	);
}

function renderWelcomeEmail(email: string) {
	return `
    <div style="background:#faf2e6;padding:40px 20px;font-family:Arial,sans-serif;color:#1f241d;">
      <div style="margin:0 auto;max-width:560px;border:1px solid rgba(31,36,29,0.1);border-radius:24px;background:#fffdf8;overflow:hidden;">
        <div style="padding:32px 32px 20px;background:linear-gradient(135deg,#f4d0d7 0%,#dfead5 100%);">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;">Plantr by Mingie</p>
          <h1 style="margin:0;font-family:Georgia,serif;font-size:38px;line-height:1;">You're following the journey.</h1>
        </div>
        <div style="padding:32px;">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">
            Thanks for joining with <strong>${email}</strong>.
          </p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">
            Plantr by Mingie is building a Brisbane-first home for people interested in the growing journey of rare alocasias.
          </p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">
            Emails will stay occasional and thoughtful, with updates shaped around progress, plant care, and how each alocasia is developing over time.
          </p>
          <p style="margin:24px 0 0;font-size:14px;line-height:1.7;color:#5f675b;">
            No payment. No pressure. Just a calmer way to stay close to the journey.
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function joinWaitlist(
	_previousState: WaitlistActionState,
	formData: FormData,
): Promise<WaitlistActionState> {
	const parsed = waitlistSchema.safeParse({
		email: formData.get("email"),
	});

	if (!parsed.success) {
		return {
			status: "error",
			message:
				parsed.error.issues[0]?.message ?? "Enter a valid email address.",
		};
	}

	if (!isResendConfigured()) {
		return {
			status: "error",
			message:
				"Waitlist email is not configured yet. Add the Resend environment variables to enable signup.",
		};
	}

	const resendApiKey = env.RESEND_API_KEY;
	const segmentId = env.RESEND_SEGMENT_ID;
	const fromEmail = env.RESEND_FROM_EMAIL;

	if (!resendApiKey || !segmentId || !fromEmail) {
		return {
			status: "error",
			message:
				"Waitlist email is not configured yet. Add the Resend environment variables to enable signup.",
		};
	}

	const resend = new Resend(resendApiKey);
	const email = parsed.data.email.toLowerCase();

	try {
		const contactResult = await resend.contacts.create({
			email,
			segments: [{ id: segmentId }],
			unsubscribed: false,
		});

		const contactError = "error" in contactResult ? contactResult.error : null;
		const duplicateSignup =
			contactError?.message?.toLowerCase().includes("already exists") ?? false;

		if (contactError && !duplicateSignup) {
			return {
				status: "error",
				message:
					"Something went wrong while saving your signup. Please try again.",
			};
		}

		const welcomeResult = await resend.emails.send({
			from: fromEmail,
			to: [email],
			subject: "You're following the Plantr by Mingie journey",
			html: renderWelcomeEmail(email),
		});

		const welcomeError = "error" in welcomeResult ? welcomeResult.error : null;

		if (welcomeError) {
			return {
				status: "error",
				message:
					"Your email was captured, but the welcome email could not be sent. Please check your inbox later.",
			};
		}

		if (env.WAITLIST_NOTIFICATION_EMAIL) {
			await resend.emails.send({
				from: fromEmail,
				to: [env.WAITLIST_NOTIFICATION_EMAIL],
				subject: "New Plantr waitlist signup",
				html: `<p>${email} joined the Plantr by Mingie waitlist.</p>`,
			});
		}

		return {
			status: "success",
			message:
				"You're signed up. Check your inbox for a welcome email from Plantr by Mingie.",
		};
	} catch {
		return {
			status: "error",
			message: "Something went wrong. Please try again in a moment.",
		};
	}
}
