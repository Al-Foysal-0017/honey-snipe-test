import type { Metadata } from 'next'
import { Montserrat, Poppins, Quicksand } from 'next/font/google'
import './globals.css'
import NavAndSidebar from '@/components/Navbar/NavAndSidebar'
import Footer from '@/components/Footer/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: '100'
})

export const metadata: Metadata = {
  title: 'Honey Snipe',
  description: 'Honey Snipe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${quicksand.className} ${poppins.className}`}>
        <NavAndSidebar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
