import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ADV/MNSTRY® | A Fake Digital Branding Agency',
  description: 'A fake digital branding agency that provides fake services to fake customers. =)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className='bg' />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
