import type { Metadata } from "next";
import { Header } from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Media Website",
  description: "A static social media demo with mocked posts, notifications, and chats."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
