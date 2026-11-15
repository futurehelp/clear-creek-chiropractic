import type { Metadata } from "next";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cody-project-c4.vercel.app"),
  title: "Clear Creek Chiropractic Center | More movement. More life.",
  description: "Personalized chiropractic and rehabilitation care in League City, Sharpstown, and Channelview.",
  openGraph: {
    title: "Clear Creek Chiropractic Center",
    description: "More movement. More life.",
    images: ["/images/hero-original.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><MotionProvider>{children}</MotionProvider></body></html>;
}
