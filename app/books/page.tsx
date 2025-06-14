import { getBooks } from '@/lib/cosmic'
import { Book } from '@/types'
import BookCard from '@/components/BookCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books - Kate\'s Books',
  description: 'Browse our complete collection of digital books from talented authors.',
}

export default async function BooksPage() {
  const books = await getBooks()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Book Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover captivating stories, insightful narratives, and compelling characters 
              from our curated collection of digital books.
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
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                No Books Available
              </h2>
              <p className="text-muted-foreground">
                Check back soon for new additions to our collection.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}