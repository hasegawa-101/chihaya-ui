import { ChihayaUIProvider } from "@chihaya-ui/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chihaya UI - Next.js Sandbox",
  description: "Testing Chihaya UI components in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ChihayaUIProvider>{children}</ChihayaUIProvider>
      </body>
    </html>
  );
}
