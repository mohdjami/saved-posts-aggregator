import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Saved Posts Aggregator",
  description:
    "Aggregate your saved posts from various social media platforms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
