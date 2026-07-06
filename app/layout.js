import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono"
});

export const metadata = {
  title: "Kataram Navya Sree — AI/ML Engineer",
  description:
    "AI/ML Engineer building agentic systems, RAG pipelines, and GenAI applications. Portfolio of Kataram Navya Sree.",
  keywords: [
    "Kataram Navya Sree",
    "AI ML Engineer",
    "Machine Learning",
    "Generative AI",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "NLP"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-ink text-ivory antialiased">{children}</body>
    </html>
  );
}
