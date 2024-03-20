import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "firatinlkc.dev",
  description: "Everythings is code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-50">
          <div className="h-20">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)] px-4 sm:px-8 md:px-12 lg:px-20 xlg:px-28">{children}</div>
        </div>
      </body>
    </html>
  );
}