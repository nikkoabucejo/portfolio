import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/core/styles/globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nikko Abucejo",
  description: "Portfolio",
};

const Root: Layout<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html id="nikkoabucejo" lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default Root;
