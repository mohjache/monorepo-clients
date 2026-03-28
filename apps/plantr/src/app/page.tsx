import Link from "next/link";
import { siteConfig } from "~/lib/site";
import { WaitlistForm } from "./_components/waitlist-form";

export default function HomePage() {
	return (
		<div className="flex min-h-dvh flex-col px-6 py-8 sm:px-10 sm:py-10">
			{/* Header */}
			<header className="flex items-center justify-between">
				<span
					className="font-medium text-base text-foreground tracking-tight sm:text-lg"
					style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
				>
					Plantr by Mingie
				</span>
				<Link
					className="text-muted-foreground text-sm transition-colors hover:text-foreground"
					href={siteConfig.instagram}
					rel="noopener noreferrer"
					target="_blank"
				>
					Instagram
				</Link>
			</header>

			{/* Main */}
			<main className="flex flex-1 flex-col items-center justify-center py-16">
				<div className="w-full max-w-sm space-y-10 text-center">
					<div className="space-y-4">
						<h1
						className="font-light text-5xl leading-[1.1] tracking-[-0.02em] sm:text-6xl"
						style={{ fontFamily: "var(--font-cormorant, Georgia, serif)" }}
					>
							Follow the journey.
						</h1>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Rare alocasias. Growing in Brisbane.
						</p>
					</div>

					<WaitlistForm submitLabel="Follow" />
				</div>
			</main>

			{/* Footer */}
			<footer className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
				<Link
					className="transition-colors hover:text-foreground"
					href={siteConfig.instagram}
					rel="noopener noreferrer"
					target="_blank"
				>
					Instagram
				</Link>
				<span aria-hidden="true" className="select-none">
					·
				</span>
				<Link
					className="transition-colors hover:text-foreground"
					href="/privacy"
				>
					Privacy
				</Link>
			</footer>
		</div>
	);
}
