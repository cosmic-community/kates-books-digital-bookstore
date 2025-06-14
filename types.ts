// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type_slug: string;
  created_at: string;
  modified_at: string;
}

// Author type
export interface Author extends CosmicObject {
  type_slug: 'authors';
  metadata: {
    name?: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    website?: string;
    social_media?: {
      twitter?: string;
      instagram?: string;
      facebook?: string;
    };
  };
}

// Book type
export interface Book extends CosmicObject {
  type_slug: 'books';
  metadata: {
    title?: string;
    description?: string;
    author?: Author;
    cover_image?: {
      url: string;
      imgix_url: string;
    };
    price?: number;
    sample_chapter?: string;
    genre?: {
      key: string;
      value: string;
    };
    publication_date?: string;
    is_featured?: boolean;
  };
}

// Chapter type
export interface Chapter extends CosmicObject {
  type_slug: 'chapters';
  metadata: {
    chapter_title?: string;
    book?: Book;
    chapter_number?: number;
    content?: string;
    word_count?: number;
  };
}

// Purchase type
export interface Purchase extends CosmicObject {
  type_slug: 'purchases';
  metadata: {
    customer_email?: string;
    customer_name?: string;
    books_purchased?: Book[];
    total_amount?: number;
    purchase_date?: string;
    payment_status?: {
      key: string;
      value: string;
    };
    transaction_id?: string;
  };
}

// Type literals for select-dropdown values
export type Genre = 'fiction' | 'non-fiction' | 'mystery' | 'romance' | 'sci-fi' | 'biography';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isBook(obj: CosmicObject): obj is Book {
  return obj.type_slug === 'books';
}

export function isAuthor(obj: CosmicObject): obj is Author {
  return obj.type_slug === 'authors';
}

export function isChapter(obj: CosmicObject): obj is Chapter {
  return obj.type_slug === 'chapters';
}

export function isPurchase(obj: CosmicObject): obj is Purchase {
  return obj.type_slug === 'purchases';
}

// Error handling helper
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}