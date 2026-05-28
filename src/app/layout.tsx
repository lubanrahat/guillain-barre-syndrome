import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "গিলেন-বারে সিনড্রোম (GBS) | সচেতনতা ও পুনরুদ্ধার গাইড",
  description: "গিলেন-বারে সিনড্রোম (Guillain-Barré Syndrome) সম্পর্কে বিস্তারিত তথ্য, লক্ষণ, জরুরি করণীয়, চিকিৎসা পদ্ধতি, ফিজিওথেরাপি, খাদ্যাভ্যাস ও মানসিক পুনর্বাসন গাইড।",
  keywords: ["GBS", "Guillain-Barre Syndrome", "গিলেন-বারে সিনড্রোম", "অটোইমিউন রোগ", "পক্ষাঘাত", "ফিজিওথেরাপি", "IVIG", "প্লাজমাফেরেসিস", "চিকিৎসা", "বাংলাদেশ GBS"],
  authors: [{ name: "Medical Awareness Team" }],
  openGraph: {
    title: "গিলেন-বারে সিনড্রোম (GBS) | সচেতনতা ও পুনরুদ্ধার গাইড",
    description: "জিবিএস রোগ সম্পর্কে বিস্তারিত বাংলা তথ্য এবং রোগীর সুস্থতার দিকনির্দেশনা।",
    type: "website",
    locale: "bn_BD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans bg-background text-foreground"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
