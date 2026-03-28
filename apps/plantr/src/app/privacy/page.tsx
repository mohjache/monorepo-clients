import Link from "next/link";

export const metadata = {
	title: "Privacy | Plantr by Mingie",
	description: "Privacy information for the Plantr by Mingie waitlist.",
};

export default function PrivacyPage() {
	return (
		<main className="mx-auto min-h-screen max-w-4xl px-5 py-16 sm:px-8">
			<div className="rounded-[2rem] border border-black/8 bg-white/75 p-6 shadow-[0_20px_80px_rgba(31,36,29,0.06)] backdrop-blur sm:p-8">
				<p className="font-medium text-black/45 text-xs uppercase tracking-[0.3em]">
					Privacy
				</p>
				<h1 className="mt-4 font-display text-4xl text-[var(--color-ink)] leading-none tracking-[-0.03em] sm:text-5xl">
					Waitlist privacy for Plantr by Mingie
				</h1>
				<div className="mt-8 space-y-6 text-black/72 text-sm leading-7">
					<p>
						If you join the Plantr by Mingie waitlist, your email address is
						used to send journey updates, rare alocasia announcements, and
						related progress information.
					</p>
					<p>
						The waitlist is intended for occasional journey-focused emails. It
						is not intended to become a high-frequency newsletter.
					</p>
					<p>
						Waitlist emails are managed through Resend. You can unsubscribe from
						future emails at any time using the unsubscribe link in those
						messages.
					</p>
					<p>
						For now, the website collects only the email address required for
						the waitlist flow.
					</p>
				</div>
				<Link
					className="mt-8 inline-flex rounded-full border border-black/10 bg-white/80 px-5 py-3 text-black/70 text-sm hover:border-[var(--color-leaf)] hover:text-[var(--color-leaf)]"
					href="/"
				>
					Back to homepage
				</Link>
			</div>
		</main>
	);
}
