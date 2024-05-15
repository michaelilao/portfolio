import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Nav from "./components/Nav";
const roboto = Roboto({
	weight: ["100", "300", "400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Michael Ilao",
	description:
		"Portfolio Website for Michael Ilao: Software Engineer @ Immigrate.AI. Startup Engineer",
	icons: {
		icon: { url: "/favicon.ico" },
		shortcut: { url: "/favicon.ico" },
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${roboto.className} bg-beige text-grey min-w-80`}>
				<div className="flex min-h-screen flex-col items-center ">
					<header className="w-full">
						<Nav />
					</header>
					<main className="h-full w-full">{children}</main>
				</div>
			</body>
		</html>
	);
}
