import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/page'
import StarsCanvas from './components/stars/page';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HIMANSHU GUPTA',
  description: 'HIMANSHU GUPTA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Himanshu Gupta Developer Portfolio - Computer Science Engineering" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <StarsCanvas/>
        </body>
    </html>
  )
}
