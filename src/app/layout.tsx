import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Seungpyo's Portfolio",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="kr">
      <head>
          <link rel='icon' href='/images/sspzoa_logo_round.svg'/>
          <meta name="theme-color" content="#6D87A8"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="#6D87A8"/>
      </head>
      <body className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
      </html>
  )
}
