import { getBook, getChaptersByBook } from '@/lib/cosmic'
import { Book, Chapter } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface BookPageProps {
  params: Promise<{ slug: string }>
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params
  
  const book = await getBook(slug) as Book | null
  
  if (!book) {
    notFound()
  }

  const chapters = await getChaptersByBook(book.id) as Chapter[]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          href="/books" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to Books
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {book.metadata.cover_image && (
              <div className="md:w-1/3">
                <img
                  src={`${book.metadata.cover_image.imgix_url}?w=400&h=600&fit=crop&auto=format,compress`}
                  alt={book.metadata.title || book.title}
                  className="w-full h-96 md:h-full object-cover"
                />
              </div>
            )}
            
            <div className="md:w-2/3 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {book.metadata.title || book.title}
              </h1>
              
              {book.metadata.author && (
                <p className="text-lg text-gray-600 mb-4">
                  by{' '}
                  <Link 
                    href={`/authors/${book.metadata.author.slug}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {book.metadata.author.metadata?.name || book.metadata.author.title}
                  </Link>
                </p>
              )}

              {book.metadata.genre && (
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-4">
                  {book.metadata.genre.value}
                </span>
              )}

              {book.metadata.price && (
                <p className="text-2xl font-bold text-green-600 mb-4">
                  ${book.metadata.price.toFixed(2)}
                </p>
              )}

              {book.metadata.publication_date && (
                <p className="text-gray-600 mb-4">
                  Published: {new Date(book.metadata.publication_date).toLocaleDateString()}
                </p>
              )}

              {book.metadata.description && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Description</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {book.metadata.description}
                  </p>
                </div>
              )}

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
                Purchase Book
              </button>
            </div>
          </div>
        </div>

        {book.metadata.sample_chapter && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Sample Chapter</h2>
            <div 
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: book.metadata.sample_chapter }}
            />
          </div>
        )}

        {chapters.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Chapters</h2>
            <div className="space-y-3">
              {chapters
                .sort((a, b) => (a.metadata.chapter_number || 0) - (b.metadata.chapter_number || 0))
                .map((chapter) => (
                  <div 
                    key={chapter.id}
                    className="border-l-4 border-blue-200 pl-4 py-2"
                  >
                    <h3 className="font-semibold text-gray-900">
                      Chapter {chapter.metadata.chapter_number}: {chapter.metadata.chapter_title}
                    </h3>
                    {chapter.metadata.word_count && (
                      <p className="text-sm text-gray-600">
                        {chapter.metadata.word_count} words
                      </p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}