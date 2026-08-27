import { AuthProvider } from "@/lib/auth-context";

export default function DashboardGroup({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
