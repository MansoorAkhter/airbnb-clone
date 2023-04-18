import { Nunito } from "next/font/google";

import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Fullstack App',
}

const font = Nunito({
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* ClientOnly component is using for Prevent Hydration Error */}
        {/* <ClientOnly> */}
        <RegisterModal />
        <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  )
}
