import "@repo/ui/styles.css";
import "~/styles/globals.css";

import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

import { siteConfig } from "~/lib/site";

const displayFont = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["300", "400", "500"],
	style: ["normal", "italic"],
	variable: "--font-cormorant",
});

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
	icons: [{ rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={displayFont.variable}>
			<body>{children}</body>
		</html>
	);
}
