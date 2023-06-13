import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/app/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmad Bilal onlineStore",
  description: "online store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-6xl mx-auto px-5 md:px-0">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
