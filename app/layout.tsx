import { Nunito } from "next/font/google";

import './globals.css'
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/ClientOnly";
import Modal from "@/app/components/modals/Modal";

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
        <Modal actionLabel="Submit" title="Hello" isOpen />
        {/* <Modal actionLabel="" body={} disbaled footer={ } isOpen={ } onClose={ } onSubmit={ } secondaryAction={ } secondaryLabel="" title="" key={ } /> */}
        <Navbar />
        {/* </ClientOnly> */}
        {children}
      </body>
    </html>
  )
}
