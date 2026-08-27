import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgentOS — The Autonomous AI Workspace",
  description:
    "AgentOS is the autonomous workspace that builds its own tools. Give it a goal, and it plans, executes, and delivers — building any missing integrations along the way.",
  keywords: ["AI", "autonomous", "workspace", "agents", "MCP", "integrations", "automation"],
  openGraph: {
    title: "AgentOS — The Autonomous AI Workspace",
    description: "AgentOS is the autonomous workspace that builds its own tools.",
    type: "website",
    url: "https://agentos.devpost.local",
    siteName: "AgentOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentOS — The Autonomous AI Workspace",
    description: "AgentOS is the autonomous workspace that builds its own tools.",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
