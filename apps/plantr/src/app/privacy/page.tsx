import { Button } from "@repo/ui/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@repo/ui/components/ui/card";
import Link from "next/link";

export const metadata = {
	title: "Privacy | Plantr by Mingie",
	description: "Privacy information for the Plantr by Mingie email signup.",
};

export default function PrivacyPage() {
	return (
		<main className="min-h-screen">
			<section className="mx-auto flex min-h-screen max-w-4xl items-center px-5 py-10 sm:px-8">
				<Card className="w-full border-border/70 bg-card/90 shadow-xl backdrop-blur">
					<CardHeader>
						<CardTitle className="font-display text-4xl tracking-[-0.03em] sm:text-5xl">
							Privacy
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-5 text-muted-foreground text-sm leading-7">
						<p>
							If you sign up through Plantr by Mingie, your email address is
							used to send occasional updates about the journey of growing rare
							alocasias.
						</p>
						<p>
							The signup is intended for calm, low-frequency email updates. It
							is not intended to become a high-volume newsletter.
						</p>
						<p>
							Emails are managed through Resend. You can unsubscribe at any time
							using the unsubscribe link included in those emails.
						</p>
						<p>
							For now, the site collects only the email address needed to manage
							signup and delivery of updates.
						</p>
						<Button
							asChild
							className="mt-2 w-fit rounded-full"
							variant="outline"
						>
							<Link href="/">Back</Link>
						</Button>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
