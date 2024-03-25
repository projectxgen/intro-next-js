import { Readex_Pro } from "next/font/google";
import "./globals.css";

import Sidebar from '@/components/sidebar'

const readexPro = Readex_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Next Js Practice | ProjectX MDN",
  description: "Next Js Practice Problem for ProjectX MDN student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${readexPro.className} flex bg-slate-100`} suppressHydrationWarning={true}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
