import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@/components/ui";
import { GoogleAnalyticsProvider } from "@/providers/GoogleAnalyticsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://flupic.com"),
	title: "Flupic",
	
	description:
		"Sitio web para conectar empresas con influencers. Somos la primera plataforma que se dedica a resolver el problema de la falta de oportunidades de colaboración entre influencers y empresas en el mercado de marketing de influencers.",
	referrer: "no-referrer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className={inter.className}>
				<GoogleAnalyticsProvider />
				<Navbar />
				<main className="">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
