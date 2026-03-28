import "@repo/ui/styles.css";
import "~/styles/globals.css";

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

export const metadata: Metadata = {
	metadataBase: new URL("https://plantr.vercel.app"),
	title: "Plantr by Mingie | Rare and Variegated Plants in Brisbane",
	description:
		"Join the Plantr by Mingie waitlist for rare and variegated alocasia, anthuriums, and collector plant releases from Brisbane.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Plantr by Mingie",
		description:
			"Rare and variegated plant releases for Brisbane collectors and Australian plant enthusiasts.",
		type: "website",
	},
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const display = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--font-display",
	weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
	subsets: ["latin"],
	variable: "--font-body",
	weight: ["400", "500", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${display.variable} ${body.variable}`} lang="en">
			<body>{children}</body>
		</html>
	);
}
