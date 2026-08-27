import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/lib/auth-context";
import fs from "fs";
import path from "path";

const inter = Inter({ subsets: ["latin"], display: "optional" });

// Load compiled CSS for inline injection
const cssPath = path.join(process.cwd(), "src", "app", "built.css");
const inlineCss = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";

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
      <head>
        {inlineCss && <style dangerouslySetInnerHTML={{ __html: inlineCss }} />}
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
