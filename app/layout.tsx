import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sriman Goud Panjala",
  description: "Personal portfolio of Sriman Goud Panjala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-background antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
