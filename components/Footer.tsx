import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">📚</div>
                <span className="text-xl font-bold">Kate's Books</span>
              </div>
              <p className="text-background/80 max-w-md">
                Your destination for discovering amazing digital books and connecting with talented authors. 
                Start your reading journey with us today.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/books" className="text-background/80 hover:text-background transition-colors">
                    Browse Books
                  </Link>
                </li>
                <li>
                  <Link href="/authors" className="text-background/80 hover:text-background transition-colors">
                    Our Authors
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@katesbooks.com" className="text-background/80 hover:text-background transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Kate's Books. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}