"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { joinWaitlist, type WaitlistActionState } from "~/app/actions";

const initialWaitlistState: WaitlistActionState = {
	status: "idle",
	message: "",
};

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-ink)] px-6 font-medium text-sm text-white shadow-[0_16px_40px_rgba(31,36,29,0.18)] hover:-translate-y-0.5 hover:bg-[var(--color-leaf)] disabled:cursor-not-allowed disabled:opacity-70"
			disabled={pending}
			type="submit"
		>
			{pending ? "Joining..." : "Join the waitlist"}
		</button>
	);
}

function FormMessage({ state }: { state: WaitlistActionState }) {
	if (state.status === "idle" || !state.message) {
		return (
			<p className="text-black/60 text-sm leading-6">
				Release emails only. No spam, no payment, and no pressure to buy.
			</p>
		);
	}

	return (
		<p
			className={
				state.status === "success"
					? "text-[var(--color-leaf)] text-sm leading-6"
					: "text-[#8f3b48] text-sm leading-6"
			}
		>
			{state.message}
		</p>
	);
}

export function WaitlistForm() {
	const [state, formAction] = useActionState(
		joinWaitlist,
		initialWaitlistState,
	);

	return (
		<form action={formAction} className="w-full">
			<div className="flex flex-col gap-3 sm:flex-row">
				<label className="sr-only" htmlFor="email">
					Email address
				</label>
				<input
					autoComplete="email"
					className="min-h-12 flex-1 rounded-full border border-black/10 bg-white/90 px-5 text-[var(--color-ink)] text-sm outline-none ring-0 placeholder:text-black/45 focus:border-[var(--color-leaf)]"
					id="email"
					name="email"
					placeholder="Enter your email for rare plant releases"
					required
					type="email"
				/>
				<SubmitButton />
			</div>
			<div className="mt-3">
				<FormMessage state={state} />
			</div>
		</form>
	);
}
