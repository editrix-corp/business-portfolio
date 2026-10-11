import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const editorial = Instrument_Serif({
  variable: "--font-editorial",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salil Salalia — Film editor and colorist",
  description:
    "Brand films, documentaries and launch spots cut, graded and mixed in Mumbai. First assembly within 48 hours.",
  openGraph: {
    title: "Salil Salalia — Film editor and colorist",
    description:
      "Brand films, documentaries and launch spots cut, graded and mixed in Mumbai.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${editorial.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
