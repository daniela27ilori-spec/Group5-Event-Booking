import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up | Piked Events",
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
