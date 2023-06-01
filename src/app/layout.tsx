/* eslint-disable react/jsx-no-undef */
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import { SideBar } from '@/components/SideBar'
import './globals.css'
import PageNavigation from '@/components/PageNavigation/components/PageNavigation'
import Footer from '@/components/Footer/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Git searcher',
  description: 'Displays the GitHub repositories and allows the user to filter through the repositories by name using a search bar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className='flex'>
          <SideBar />
          {children}
        </div>
        <div className='align-center'>
          <PageNavigation />
        </div>
        <Footer />
      </body>
    </html>
  )
}
