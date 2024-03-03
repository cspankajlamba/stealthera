import type { Metadata } from 'next'
import './globals.css'

import Header from './components/header';
import Footer from './components/footer'


export const metadata: Metadata = {
  title: 'StealthEra',
  description: 'Health & Wellness App',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=''>
        <header className='header'><Header /></header>
        <main className='main'>
          {children}
        </main>
        <footer className='footer'><Footer /></footer>
      </body>
    </html>
  )
}
