import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barbershop Wien | Erstklassige Herrenpflege",
  description:
    "Dein Style. Dein Barber. Erstklassige Herrenpflege im Herzen von Wien. Traditionelle Handwerkskunst trifft modernen Style.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body className="grain-overlay min-h-screen">{children}</body>
    </html>
  );
}
