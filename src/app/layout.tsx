import "~/styles/globals.css";

import { type Metadata } from "next";
import Sidebar from "~/components/sidebar";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" >
      <body>
       <div className="flex w-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
  
       <Sidebar />
       {children}
       </div>
        </body>
    </html>
  );
}
