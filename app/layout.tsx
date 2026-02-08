import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Healing Hibiscus, PLLC | Mental Health Therapy and Consulting",
  description: "Mental Health Therapy and Consulting Services. Specializing in women's issues, trauma, cultural/racial issues, and more. Available in-person in Shrewsbury, MA and via telehealth. Terapia disponible en español.",
  keywords: "therapy, mental health, BIPOC, Latina therapist, trauma, Massachusetts, Shrewsbury, telehealth, Spanish speaking therapist, clinical supervision, consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
