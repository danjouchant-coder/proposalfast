import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CLOSERAI",
  description: "Turn any lead into a closed deal in 60 seconds."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
