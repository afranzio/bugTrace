import './globals.css'
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from "@/components/navbar/nav"
import FootBar from "@/components/footer/foot"

// import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from "@/components/theme-provider";

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
    <html data-theme="light" lang="en">
      <link rel="icon" href="/bug.svg" sizes="any" />
      <body className='w-full h-full overflow-y-scroll no-scrollbar'>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={"flex flex-col container mx-auto min-h-screen"}>
            <NavBar />
            <div className="flex-grow">
              {children}
            </div>
            <FootBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
