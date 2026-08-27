import { AuthProvider } from "@/lib/auth-context";

export default function PublicGroup({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
