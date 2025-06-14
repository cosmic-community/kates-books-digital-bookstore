import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Kate's Books - Digital Bookstore",
  description: 'Discover amazing books from talented authors. Browse our digital collection, read sample chapters, and purchase your favorites.',
  keywords: 'books, ebooks, digital bookstore, authors, reading, literature',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}