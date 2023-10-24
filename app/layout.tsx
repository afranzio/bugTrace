import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from "./components/navbar/nav"
import FootBar from "./components/footer/foot"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tracker',
  description: 'Bug Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/bug.svg" sizes="any" />
      <body className={inter.className}>
        <NavBar />
        {children}
        <FootBar />
      </body>
    </html>
  )
}
