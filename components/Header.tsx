import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl">📚</div>
            <span className="text-xl font-bold text-foreground">Kate's Books</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/books" className="text-foreground hover:text-primary transition-colors">
              Books
            </Link>
            <Link href="/authors" className="text-foreground hover:text-primary transition-colors">
              Authors
            </Link>
          </nav>
          
          {/* Mobile menu button - converted to client component for interactivity */}
          <div className="md:hidden">
            <div className="text-foreground hover:text-primary p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}