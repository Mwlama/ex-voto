import React from 'react';
import { Calendar, Clock, User, ChevronRight, Search } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The History and Significance of Ex-votos in Religious Art",
    excerpt: "Discover the rich tradition of votive offerings and their role in spiritual expression through the ages.",
    content: "Ex-votos have been an integral part of religious practice for centuries...",
    author: "Maria Santos",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "History",
    image: "/7.png"
  },
  {
    id: 2,
    title: "Contemporary Ex-voto Artists Shaping Modern Devotional Art",
    excerpt: "Meet the artisans keeping the tradition alive while bringing fresh perspectives to religious art.",
    content: "In the modern art world, ex-voto creators are finding innovative ways...",
    author: "James Miller",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Artists",
    image: "/9.png"
  },
  {
    id: 3,
    title: "The Symbolism Behind Ex-voto Imagery",
    excerpt: "Understanding the deep meanings and symbols commonly found in ex-voto art.",
    content: "Every element in an ex-voto piece carries specific significance...",
    author: "Ana Martínez",
    date: "March 10, 2024",
    readTime: "5 min read",
    category: "Symbolism",
    image: "https://images.unsplash.com/photo-1579541671172-43429ce17aca"
  },
  {
    id: 4,
    title: "Collecting Ex-votos: A Guide for Beginners",
    excerpt: "Essential tips for starting your own collection of religious folk art.",
    content: "Building a meaningful collection of ex-votos requires knowledge...",
    author: "Robert Chen",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Collecting",
    image: "/8.png"
  }
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section with Video */}
      <div className="relative mb-12">
        <div className="relative rounded-2xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/bijou.mp4" type="video/mp4" />
          </video>
          <div className="relative bg-black/50 p-12">
            <div className="relative z-10 text-white">
              <h1 className="text-4xl font-bold mb-4">Understanding Ex-votos</h1>
              <p className="text-xl mb-6 max-w-2xl">
                Explore the rich tradition of religious offerings and their significance in spiritual practice
              </p>
              <div className="relative max-w-lg">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="mb-16">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-rose-600 px-3 py-1 rounded-full text-sm">
                  {blogPosts[0].category}
                </span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-lg mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-gray-500 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <button className="text-rose-600 hover:text-rose-700 flex items-center gap-1">
                  Read More
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest articles and insights about ex-votos
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            />
            <button className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;