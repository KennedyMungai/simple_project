import NavBar from '@/components/NavBar/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WikiRocket',
  description: 'A very simple app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-slate-800'>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
