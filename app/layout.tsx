import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AudienceProvider } from "@/components/AudienceContext";
import { LayoutShell } from "@/components/LayoutShell";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadawais.dev"),
  title: {
    default: "Muhammad Awais | Full-Stack AI Engineer & Computer Vision Researcher",
    template: "%s | Muhammad Awais",
  },
  description:
    "Full-stack AI engineer who builds computer vision, LLM and agentic systems end to end, from data collection to deployed product. BS CS NUML (CGPA 3.34).",
  keywords: [
    "Muhammad Awais",
    "Full-Stack AI Engineer",
    "Computer Vision",
    "YOLOv8",
    "TensorRT",
    "Islamabad",
    "NUML",
    "Agentic Systems",
    "CSC Scholarship",
    "ANSO Scholarship",
    "NIC Islamabad",
    "Next.js",
    "PyTorch",
  ],
  authors: [{ name: "Muhammad Awais", url: "https://muhammadawais.dev" }],
  creator: "Muhammad Awais",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadawais.dev",
    title: "Muhammad Awais | Full-Stack AI Engineer & Researcher",
    description:
      "End-to-end Computer Vision & Agentic AI Systems. Real-world deployed products with verified metrics.",
    siteName: "Muhammad Awais Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Awais | Full-Stack AI Engineer",
    description:
      "Building real-world Computer Vision & Agentic AI with verified metrics.",
    creator: "@MuhammadAwaisAI",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Awais",
    jobTitle: "Full-Stack AI Engineer",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "National University of Modern Languages (NUML)",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Islamabad",
        addressCountry: "PK",
      },
    },
    knowsAbout: [
      "Computer Vision",
      "YOLOv8 / YOLOv11",
      "Edge Deep Learning",
      "Full-Stack Web Development",
      "Multi-Agent Systems",
      "Role-Based Access Control",
    ],
    url: "https://muhammadawais.dev",
    sameAs: [
      "https://github.com/MuhammadAwais",
      "https://linkedin.com/in/muhammad-awais-ai",
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-sky-500 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sky-500 text-slate-950 font-bold rounded shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <Suspense fallback={null}>
            <AudienceProvider>
              <LayoutShell>{children}</LayoutShell>
            </AudienceProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
