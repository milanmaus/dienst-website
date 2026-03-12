import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dienst – AI Platform for Security and Law Enforcement",
  description:
    "Dienst reduces manual documentation time by up to 50% – no data migration, no US vendor, no IT overhead.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
