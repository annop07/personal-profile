import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "./utils/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";

/* Set NEXT_PUBLIC_SITE_URL once the site has a domain; Vercel fills the
   fallback in automatically on its own deployments. */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description =
  "AI engineer working on RAG, agentic systems and model fine-tuning — hybrid retrieval at 0.878 MRR, a QLoRA fine-tune at 0.96 exact-record accuracy, and an open-source package on PyPI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Annop Sangsila — AI Engineer",
    template: "%s · Annop Sangsila",
  },
  description,
  applicationName: "Annop Sangsila",
  authors: [{ name: "Annop Sangsila", url: "https://github.com/annop07" }],
  creator: "Annop Sangsila",
  keywords: [
    "Annop Sangsila",
    "AI Engineer",
    "RAG",
    "hybrid search",
    "QLoRA",
    "fine-tuning",
    "agentic systems",
    "pgvector",
    "FastAPI",
    "Next.js",
    "Khon Kaen University",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Annop Sangsila",
    title: "Annop Sangsila — AI Engineer",
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Annop Sangsila — AI Engineer · Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annop Sangsila — AI Engineer",
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
