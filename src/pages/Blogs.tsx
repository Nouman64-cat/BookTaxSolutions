import React, { useState, useEffect } from "react";
import { FiArrowRight, FiCalendar, FiClock, FiTag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { blogService } from "../services/blogService";
import type { Blog } from "../types/blog";

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const BLOGS_PER_PAGE = 6;

  const totalPages = Math.max(1, Math.ceil(blogs.length / BLOGS_PER_PAGE));

  useEffect(() => {
    // clamp current page if blogs length changes
    if (currentPage > totalPages) setCurrentPage(1);
  }, [blogs.length, currentPage, totalPages]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const fetchedBlogs = await blogService.getAllBlogs();
        setBlogs(fetchedBlogs);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              <FiTag className="h-3 w-3" />
              Insights & Resources
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Tax & Accounting Insights
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest tax tips, accounting best practices,
              and financial insights from our team of certified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="relative">
                <div className="animate-spin rounded-full h-20 w-20 border-4 border-slate-200 border-t-blue-600"></div>
                <div className="mt-4 text-center text-slate-600 text-sm">
                  Loading articles...
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto space-y-4">
                <div className="text-6xl">📰</div>
                <div className="text-red-600 text-lg font-medium">
                  {error}
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs
                  .slice(
                    (currentPage - 1) * BLOGS_PER_PAGE,
                    currentPage * BLOGS_PER_PAGE
                  )
                  .map((blog) => (
                    <article
                      key={blog.slug}
                      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => handleBlogClick(blog.slug)}
                    >
                      {/* Blog Image */}
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                        {blog.image?.url ? (
                          <img
                            src={blog.image.url}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="h-full flex items-center justify-center">
                            <div className="text-slate-400 text-center">
                              <div className="text-6xl mb-2">📊</div>
                              <div className="text-sm font-medium">
                                Article Image
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="p-6 space-y-4">
                        {/* Title */}
                        <h2 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {blog.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                          {blog.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-200">
                          <div className="flex items-center gap-1">
                            <FiCalendar className="h-3 w-3" />
                            <span>Latest</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiClock className="h-3 w-3" />
                            <span>5 min read</span>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBlogClick(blog.slug);
                          }}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-all flex items-center justify-center group/btn"
                        >
                          Read Article
                          <FiArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </article>
                  ))}
              </div>

              {/* Pagination Controls */}
              {blogs.length > BLOGS_PER_PAGE && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-6 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (p) => (
                        <button
                          key={p}
                          onClick={() => setCurrentPage(p)}
                          className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                            p === currentPage
                              ? "bg-blue-600 text-white"
                              : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {p}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="px-6 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}

          {/* Newsletter Subscription */}
          <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Stay Updated with Tax & Accounting Tips
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and get the latest tax tips,
              accounting insights, and financial strategies delivered directly
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 bg-white placeholder-slate-500 border border-transparent focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-all"
              />
              <button className="bg-white hover:bg-blue-50 text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap shadow-lg hover:shadow-xl">
                Subscribe Now
              </button>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              No spam, unsubscribe at any time. Your privacy is important to us.
            </p>
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Browse by Category
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Tax Planning",
                  count: 15,
                  color: "bg-blue-600",
                  icon: "📊",
                },
                {
                  name: "Bookkeeping",
                  count: 12,
                  color: "bg-green-600",
                  icon: "📚",
                },
                {
                  name: "Business Tax",
                  count: 8,
                  color: "bg-purple-600",
                  icon: "💼",
                },
                {
                  name: "Personal Finance",
                  count: 10,
                  color: "bg-orange-600",
                  icon: "💰",
                },
              ].map((category) => (
                <div
                  key={category.name}
                  className="group bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-lg transition-all cursor-pointer hover:border-blue-300"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 ${category.color} rounded-full text-white font-bold text-lg mb-3 shadow-md`}
                  >
                    {category.count}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {category.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {category.count} articles
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
