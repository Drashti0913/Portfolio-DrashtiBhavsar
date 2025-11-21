import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drashti Bhavsar - Portfolio",
  description: "Data Science and AI/ML Enthusiast - Researcher Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

