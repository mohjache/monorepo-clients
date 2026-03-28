import "@repo/ui/styles.css";
import "~/styles/globals.css";

import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import { siteConfig } from "~/lib/site";

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: "Plantr by Mingie | Rare Alocasias in Brisbane",
	description: siteConfig.description,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		siteName: siteConfig.name,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
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
