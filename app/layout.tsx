import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/components/auth/AuthProvider";
import { WishlistProvider } from "@/components/wishlist/WishlistContext";
import JsonLd from "@/components/seo/JsonLd";


const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {

  metadataBase: new URL("https://novaskill.org"),

  title: {
    default:
      "NovaSkill | Learn AI, Technology & Career Skills",
    template: "%s | NovaSkill",
  },


  description:
    "NovaSkill is a modern online learning platform helping students and professionals master AI, Web Development, Cyber Security, Data Science and future technology skills.",


  keywords: [
    "NovaSkill",
    "online learning platform",
    "AI courses",
    "machine learning courses",
    "web development courses",
    "cyber security courses",
    "data science courses",
    "professional certifications",
    "career development",
    "technology education",
  ],


  authors: [
    {
      name: "NovaSkill",
    },
  ],


  creator: "NovaSkill",
  publisher: "NovaSkill",


  alternates: {
    canonical: "https://novaskill.org",
  },


  openGraph: {

    title:
      "NovaSkill | Learn Skills That Build Your Future",

    description:
      "Master AI, Web Development, Cyber Security and modern technology skills with expert-led courses.",

    url: "https://novaskill.org",

    siteName: "NovaSkill",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaSkill Online Learning Platform",
      },
    ],
  },


  twitter: {

    card: "summary_large_image",

    title:
      "NovaSkill | Future Skills Learning Platform",

    description:
      "Learn AI, technology and career skills through practical courses.",

    images: [
      "/og-image/og-image.png",
    ],
  },


  icons: {

    icon: "/favicon/favicon.ico",

    shortcut:
      "/favicon/favicon.ico",

    apple:
      "/favicon/apple-touch-icon.png",

  },


  robots: {

    index: true,

    follow: true,

    googleBot: {

      index: true,

      follow: true,

    },

  },

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en" suppressHydrationWarning>


      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >

        <JsonLd slug="" />


        <AuthProvider>

          <WishlistProvider>

            {children}

          </WishlistProvider>

        </AuthProvider>


      </body>


    </html>

  );

}