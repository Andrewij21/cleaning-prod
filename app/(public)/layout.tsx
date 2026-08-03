import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "./_components/sections/Header";
import { Footer } from "./_components/sections/Footer";
import { Chatbot } from "./_components/sections/Chatbot";

export const metadata: Metadata = {
  robots: { index: true, follow: true },
};

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Chatbot />
    </>
  );
}
