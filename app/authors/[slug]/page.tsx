import { getAuthor, getBooks } from '@/lib/cosmic'
import { Author, Book } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import BookCard from '@/components/BookCard'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  
  const author = await getAuthor(slug) as Author | null
  
  if (!author) {
    notFound()
  }

  // Get all books and filter by this author
  const allBooks = await getBooks() as Book[]
  const authorBooks = allBooks.filter(book => 
    book.metadata.author?.id === author.id
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link 
          href="/authors" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to Authors
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="md:flex md:items-start md:space-x-8">
            {author.metadata.profile_photo && (
              <div className="md:w-1/4 mb-6 md:mb-0">
                <img
                  src={`${author.metadata.profile_photo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                  alt={author.metadata.name || author.title}
                  className="w-48 h-48 md:w-full md:h-auto rounded-full md:rounded-lg object-cover mx-auto"
                />
              </div>
            )}
            
            <div className="md:w-3/4">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {author.metadata.name || author.title}
              </h1>
              
              {author.metadata.bio && (
                <div 
                  className="prose max-w-none text-gray-700 mb-6"
                  dangerouslySetInnerHTML={{ __html: author.metadata.bio }}
                />
              )}

              <div className="flex flex-wrap gap-4">
                {author.metadata.website && (
                  <a
                    href={author.metadata.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    🌐 Website
                  </a>
                )}
                
                {author.metadata.social_media?.twitter && (
                  <a
                    href={`https://twitter.com/${author.metadata.social_media.twitter.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    🐦 Twitter
                  </a>
                )}
                
                {author.metadata.social_media?.instagram && (
                  <a
                    href={`https://instagram.com/${author.metadata.social_media.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    📸 Instagram
                  </a>
                )}
                
                {author.metadata.social_media?.facebook && (
                  <a
                    href={`https://facebook.com/${author.metadata.social_media.facebook}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    📘 Facebook
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Books by {author.metadata.name || author.title}
          </h2>
          
          {authorBooks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No books found for this author.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}