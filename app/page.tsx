import Link from 'next/link'
import { getBooks, getFeaturedBooks, getAuthors } from '@/lib/cosmic'
import { Book, Author } from '@/types'
import BookCard from '@/components/BookCard'
import AuthorCard from '@/components/AuthorCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const [featuredBooks, allBooks, authors] = await Promise.all([
    getFeaturedBooks(),
    getBooks(),
    getAuthors()
  ])

  const books = featuredBooks.length > 0 ? featuredBooks : allBooks.slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Welcome to Kate's Books
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover captivating stories and meaningful narratives from talented authors. 
                Explore our digital collection and find your next favorite read.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/books" className="btn-primary">
                  Browse Books
                </Link>
                <Link href="/authors" className="btn-outline">
                  Meet Our Authors
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {featuredBooks.length > 0 ? 'Featured Books' : 'Latest Books'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {featuredBooks.length > 0 
                  ? 'Handpicked selections from our most popular and acclaimed titles'
                  : 'Discover our latest collection of engaging stories and insightful narratives'
                }
              </p>
            </div>
            
            {books.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {books.map((book) => (
                  <BookCard key={book.id} book={book as Book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No books available at the moment.</p>
              </div>
            )}
            
            {allBooks.length > 4 && (
              <div className="text-center mt-12">
                <Link href="/books" className="btn-primary">
                  View All Books
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Authors Section */}
        {authors.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Meet Our Authors
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get to know the talented writers behind our remarkable collection of books
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {authors.slice(0, 3).map((author) => (
                  <AuthorCard key={author.id} author={author as Author} />
                ))}
              </div>
              
              {authors.length > 3 && (
                <div className="text-center mt-12">
                  <Link href="/authors" className="btn-primary">
                    View All Authors
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Reading Journey Today
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of readers who have discovered their new favorite books. 
                Browse our collection and start reading instantly.
              </p>
              <Link href="/books" className="btn bg-background text-foreground hover:bg-background/90">
                Explore Our Library
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}