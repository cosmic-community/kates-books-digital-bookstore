import Link from 'next/link'
import { Book } from '@/types'

interface BookCardProps {
  book: Book
  showAuthor?: boolean
  className?: string
}

export default function BookCard({ book, showAuthor = true, className = '' }: BookCardProps) {
  const coverImage = book.metadata?.cover_image
  const author = book.metadata?.author
  const price = book.metadata?.price
  const genre = book.metadata?.genre

  return (
    <article className={`card hover:shadow-lg transition-shadow ${className}`}>
      <Link href={`/books/${book.slug}`} className="block">
        {coverImage && (
          <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg">
            <img 
              src={`${coverImage.imgix_url}?w=600&h=800&fit=crop&auto=format,compress`}
              alt={book.title}
              width={300}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
            {book.title}
          </h3>
          
          {showAuthor && author && (
            <p className="text-muted-foreground mb-2">
              by {author.title}
            </p>
          )}
          
          {book.metadata?.description && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {book.metadata.description}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            {price && (
              <span className="text-lg font-semibold text-primary">
                ${price.toFixed(2)}
              </span>
            )}
            
            {genre && (
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                {genre.value}
              </span>
            )}
          </div>
          
          {book.metadata?.is_featured && (
            <div className="mt-2">
              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}