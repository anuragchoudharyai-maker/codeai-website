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
  title: "CodeAI Institute | AI, Data Science & GenAI Training in Korba",
  description:
    "Learn Generative AI, Data Science, Data Analytics and GenAI Tools Mastery at CodeAI Institute, Korba. 100% Practical Training, Live Projects, Expert Mentors and Placement Support.",
  keywords: [
    "CodeAI Institute",
    "AI Institute Korba",
    "Generative AI Course",
    "Data Science Course",
    "Data Analytics Course",
    "GenAI Tools Mastery",
    "AI Training Chhattisgarh",
    "Coding Institute Korba",
  ],

  openGraph: {
    title: "CodeAI Institute",
    description: "India's Best Practical AI Training Institute",
    url: "https://codeaiinstitute.com",
    siteName: "CodeAI Institute",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "CodeAI Institute",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CodeAI Institute",
    description: "India's Best Practical AI Training Institute",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-900">
        <AOSProvider>{children}</AOSProvider>

        {/* Google Analytics */}
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

        {/* Schema Markup */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "CodeAI Institute",
            url: "https://codeaiinstitute.com",
            logo: "https://codeaiinstitute.com/icon.png",
            description:
              "AI, Data Science, Data Analytics and GenAI Tools Mastery Training Institute in Korba, Chhattisgarh.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Korba",
              addressRegion: "Chhattisgarh",
              addressCountry: "IN",
            },
            sameAs: [],
          })}
        </Script>
      </body>
    </html>
  );
}