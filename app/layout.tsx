import Sidebar from "@/components/templates/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryClientProvider from "@/components/providers/queryClientProvider";
import Footer from "@/components/templates/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <Sidebar />
          <main className="bg-slate-50 min-h-screen md:pl-40 lg:pl-80 md:pr-8 pt-14 pb-10 md:pt-10 px-3 md:px-0">
            {children}
          </main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
