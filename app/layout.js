import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "KingShow | URL Shortener",
  description:
    "Easily shorten and manage your long links with KingShow — a fast, secure, and reliable URL shortener built by KingShowPlays.",
  keywords:
    "url shortener, link shortener, custom short link, shorten urls, KingShow, bitly alternative, short links, create short link",
  openGraph: {
    title: "KingShow | Shorten Your Links Instantly",
    description:
      "KingShow lets you transform long, messy URLs into clean, shareable short links instantly — simple, secure, and free.",
    url: "https://shortwithking.vercel.app",
    type: "website",
    images: [
      {
        url: "https://shortwithking.vercel.app/assets/images/link-preview1.avif",
        width: 1200,
        height: 630,
        alt: "Shorten long links easily with KingShow",
      },
      {
        url: "https://shortwithking.vercel.app/assets/images/link-preview2.avif",
        width: 1200,
        height: 630,
        alt: "Create custom short links with KingShow",
      },
      {
        url: "https://shortwithking.vercel.app/assets/images/link-preview3.avif",
        width: 1200,
        height: 630,
        alt: "Fast and reliable URL shortener by KingShowPlays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KingShow | Shorten Your Links Instantly",
    description:
      "A clean, simple, and secure platform to shorten and share links effortlessly — created by KingShowPlays.",
    images: [
      "https://shortwithking.vercel.app/assets/images/link-preview1.avif",
      "https://shortwithking.vercel.app/assets/images/link-preview2.avif",
      "https://shortwithking.vercel.app/assets/images/link-preview3.avif",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
