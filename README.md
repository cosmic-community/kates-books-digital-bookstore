# Kate's Books - Digital Bookstore

A modern, responsive digital bookstore built with Next.js 15, featuring author profiles, book catalogs, sample chapters, and purchase tracking. This application showcases a complete e-commerce solution for digital books with a clean, professional design.

## ✨ Features

- **📚 Book Catalog** - Browse and discover books with detailed information
- **👤 Author Profiles** - Learn about authors with bios, photos, and social links
- **📖 Sample Chapters** - Read sample content before purchasing
- **🛒 Purchase Tracking** - Complete purchase history and transaction management
- **🎯 Featured Books** - Highlight bestsellers and recommended reads
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Built with Next.js 15 and optimized images
- **🔍 Genre Filtering** - Browse books by genre and category

## 🚀 Clone this Bucket

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=kates-books-production)

## 🛠️ Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[Cosmic](https://www.cosmicjs.com)** - Headless CMS for content management
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager

## 📋 Prerequisites

- Node.js 18.0 or later
- Bun package manager
- A Cosmic account and bucket

## 🚀 Getting Started

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd kates-books
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun run dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📚 Cosmic SDK Examples

### Fetching Books
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all books with author information
const books = await cosmic.objects
  .find({ type: 'books' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get featured books only
const featuredBooks = await cosmic.objects
  .find({ 
    type: 'books',
    'metadata.is_featured': true 
  })
  .depth(1)
```

### Fetching Authors
```typescript
// Get all authors
const authors = await cosmic.objects
  .find({ type: 'authors' })
  .props(['id', 'title', 'slug', 'metadata'])

// Get specific author
const author = await cosmic.objects
  .findOne({ 
    type: 'authors',
    slug: 'alex-thompson' 
  })
```

### Creating a Purchase
```typescript
// Create new purchase record
const purchase = await cosmic.objects.insertOne({
  type: 'purchases',
  title: `Purchase by ${customerName}`,
  metadata: {
    customer_email: 'customer@example.com',
    customer_name: 'Customer Name',
    books_purchased: ['book-id-1', 'book-id-2'],
    total_amount: 22.98,
    purchase_date: '2024-01-20',
    payment_status: 'completed',
    transaction_id: 'TXN_12345'
  }
})
```

## 🎨 Cosmic CMS Integration

This application integrates with [Cosmic](https://www.cosmicjs.com/docs) using the following Object Types:

### Books
- **Title** (text) - Book title
- **Description** (textarea) - Book description
- **Author** (object) - Connected to Authors
- **Cover Image** (file) - Book cover image
- **Price** (number) - Book price
- **Sample Chapter** (html-textarea) - Preview content
- **Genre** (select-dropdown) - Book category
- **Publication Date** (date) - Release date
- **Is Featured** (switch) - Featured book flag

### Authors
- **Name** (text) - Author name
- **Bio** (html-textarea) - Author biography
- **Profile Photo** (file) - Author photo
- **Website** (text) - Author website URL
- **Social Media** (json) - Social media links

### Chapters
- **Chapter Title** (text) - Chapter name
- **Book** (object) - Connected to Books
- **Chapter Number** (number) - Chapter order
- **Content** (html-textarea) - Chapter content
- **Word Count** (number) - Chapter length

### Purchases
- **Customer Email** (text) - Buyer email
- **Customer Name** (text) - Buyer name
- **Books Purchased** (objects) - Connected to Books
- **Total Amount** (number) - Purchase total
- **Purchase Date** (date) - Transaction date
- **Payment Status** (select-dropdown) - Payment state
- **Transaction ID** (text) - Payment reference

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the project: `bun run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Environment Variables for Production
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (for forms/purchases)

<!-- README_END -->