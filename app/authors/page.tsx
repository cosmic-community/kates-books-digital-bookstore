import { getAuthors } from '@/lib/cosmic'
import { Author } from '@/types'
import AuthorCard from '@/components/AuthorCard'

export default async function AuthorsPage() {
  const authors = await getAuthors() as Author[]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Authors</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented writers behind our collection of captivating books. 
            Each author brings their unique voice and perspective to create stories that inspire and entertain.
          </p>
        </div>

        {authors.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No authors found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}