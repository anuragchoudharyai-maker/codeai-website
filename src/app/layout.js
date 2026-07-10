import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "./components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeAI Institute",
  description: "India's Best Practical AI Training Institute",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-900">
        <AOSProvider>
          {children}
        </AOSProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0CR5S0YXCQ"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0CR5S0YXCQ');
          `}
        </Script>
      </body>
    </html>
  );
}