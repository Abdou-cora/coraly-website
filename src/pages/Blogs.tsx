import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, TrendingUp, Mail } from 'lucide-react';

export default function Blogs() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { lng } = useParams();

  const categories = [
    { name: 'All', count: 7 },
    { name: 'AI Tools', count: 6 },
    { name: 'Real Estate AI', count: 1 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How AI Can 3× Your Real-Estate Leads Without Extra Agents",
      excerpt: "Discover how chatbots, predictive scoring & AI marketing automation can triple real-estate leads while slashing costs—plus 5 quick-start steps & KPIs.",
      category: "AI Tools",
      author: "Coraly Team",
      date: "2025-01-30",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Virtual Staging in 2025: The Complete Guide",
      excerpt: "Everything you need to know about virtual staging in 2025: costs, ROI, best software, and step-by-step workflows that help agents sell faster.",
      category: "AI Tools",
      author: "Sarah Chen",
      date: "2025-01-30",
      readTime: "12 min read",
      image: "/images/virtual staging.webp",
      featured: false
    },
    {
      id: 3,
      title: "How AI & Computer Vision in MLS Tools Empower Agents",
      excerpt: "See how AI-powered computer vision inside MLS platforms automates listing input, boosts search visibility and frees real-estate agents to close more deals.",
      category: "AI Tools",
      author: "Tech Team",
      date: "2025-01-28",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 4,
      title: "AI for WhatsApp Leads: 2025 Real Estate Guide",
      excerpt: "Learn how AI chatbots on WhatsApp boost lead conversion 35% and answer buyers in under 60 seconds, transforming real estate communication.",
      category: "AI Tools",
      author: "Tech Team",
      date: "2025-01-31",
      readTime: "7 min read",
      image: "/images/coraly watsapp.webp",
      featured: false
    },
    {
      id: 5,
      title: "How AI Is Helping Real-Estate Marketplaces Eliminate Fake Listings",
      excerpt: "Learn how artificial intelligence detects duplicates, low-quality, and fraudulent property listings, boosting buyer trust and platform ROI.",
      category: "Real Estate AI",
      author: "Michael",
      date: "2024-01-21",
      readTime: "4 min read",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false
    },
    {
      id: 6,
      title: "The Complete Guide to Virtual Staging in 2024",
      excerpt: "How agents save thousands per listing, and sell homes faster with AI. Discover cost comparisons, performance data, and step-by-step workflows.",
      category: "AI Tools",
      author: "Sophie Malik",
      date: "2024-01-25",
      readTime: "8 min read",
      image: "/images/before image - empty living room.webp",
      featured: false
    },
    {
      id: 7,
      title: "How AI Enhances Real Estate Photos in 15 Seconds",
      excerpt: "Discover how Coraly transforms dark, blurry property images into studio-grade photos that sell properties 40% faster.",
      category: "AI Tools",
      author: "Sophie Malik",
      date: "2024-01-15",
      readTime: "3 min read",
      image: "/images/staging_coraly_branded.webp",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  const AITools = blogPosts.filter(post => post.category === "AI Tools");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Real Estate AI{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Insights & Tips
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with the latest AI tools, market insights, and proven strategies for real estate professionals.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button type="button" aria-label="category"
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category.name
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>

            <Link to={`/${lng}/blog/${featuredPost.id}`} className="group">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full font-semibold">
                      Featured
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {((selectedCategory === 'All') || (selectedCategory === 'Real Estate AI')) && regularPosts.map((post) => (
                  <Link key={post.id} to={`/${lng}/blog/${post.id}`} className="group">
                    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
                {selectedCategory === 'AI Tools' && AITools.map((post) => (
                  <Link key={post.id} to={`/${lng}/blog/${post.id}`} className="group">
                    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-500 mb-4">
                    <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                    <p>Try adjusting your search terms or category filter.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Get the latest AI insights and real estate tips delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                      />
                      <button type="button" aria-label="subscribe" className="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>

                {/* Popular Articles */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    Popular Articles
                  </h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 4).map((post) => (
                      <Link key={post.id} to={`/${lng}/blog/${post.id}`} className="group block">
                        <div className="flex gap-3">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 text-sm">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button type="button" aria-label="category"
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === category.name
                          ? 'bg-purple-100 text-purple-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="text-sm text-gray-500">({category.count})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Block */}
                <div className="bg-gray-100 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Transform Your Listings?</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Join thousands of agents using AI to create better listings in seconds.
                  </p>
                  <button
                    type="button" aria-label="Start Free Trial"
                    data-popup="signup"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
