import { generatePageMetadata } from "@/utils/seo";
import type { Metadata } from "next";
import Container from "./_components/container";

export const metadata: Metadata = generatePageMetadata({
  path: "/",
});

export default function Home() {
  return <Container />;
}
