import Link from 'next/link'
import { Author } from '@/types'

interface AuthorCardProps {
  author: Author
  className?: string
}

export default function AuthorCard({ author, className = '' }: AuthorCardProps) {
  const profilePhoto = author.metadata?.profile_photo
  const bio = author.metadata?.bio
  const website = author.metadata?.website
  const socialMedia = author.metadata?.social_media

  return (
    <article className={`card hover:shadow-lg transition-shadow ${className}`}>
      <Link href={`/authors/${author.slug}`} className="block">
        <div className="text-center">
          {profilePhoto && (
            <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
              <img 
                src={`${profilePhoto.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={author.title}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {author.title}
          </h3>
          
          {bio && (
            <div 
              className="text-sm text-muted-foreground mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{ 
                __html: bio.replace(/<[^>]*>/g, '').substring(0, 150) + '...' 
              }}
            />
          )}
          
          <div className="flex justify-center space-x-4">
            {website && (
              <a 
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                🌐
              </a>
            )}
            
            {socialMedia?.twitter && (
              <a 
                href={`https://twitter.com/${socialMedia.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                🐦
              </a>
            )}
            
            {socialMedia?.instagram && (
              <a 
                href={`https://instagram.com/${socialMedia.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                📷
              </a>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}