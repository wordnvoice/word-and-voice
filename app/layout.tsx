import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wordandvoice.in"),

  title: {
    default: "Word & Voice",
    template: "%s | Word & Voice",
  },

  description:
    "Word & Voice is a Christian creative platform sharing worship music, books, devotionals, creative projects and Christ-centered resources.",

  keywords: [
    "Word & Voice",
    "Christian Music",
    "Worship Songs",
    "Christian Books",
    "Devotionals",
    "Bible",
    "Jesus Christ",
    "Christian Creative Platform",
    "Hindi Worship",
    "English Worship",
  ],

  authors: [
    {
      name: "Word & Voice",
    },
  ],

  creator: "Word & Voice",

  publisher: "Word & Voice",

  applicationName: "Word & Voice",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Word & Voice",

    description:
      "Music. Books. Projects. Christ-centered creativity.",

    url: "https://wordandvoice.in",

    siteName: "Word & Voice",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Word & Voice",

    description:
      "Music. Books. Projects. Christ-centered creativity.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}