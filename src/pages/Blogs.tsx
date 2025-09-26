import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { blogService } from "../services/blogService";
import type { Blog } from "../types/blog";

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Tax & Accounting Insights
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed with the latest tax tips, accounting best practices,
            and financial insights from our team of certified professionals.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="text-red-600 text-lg font-medium mb-4">
                {error}
              </div>
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.slug}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Blog Image */}
                  <div className="h-48 overflow-hidden">
                    {blog.image?.url ? (
                      <img
                        src={blog.image.url}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                        <div className="text-slate-500 text-center">
                          <div className="text-4xl mb-2">📊</div>
                          <div className="text-sm">Blog Image</div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Title */}
                    <h2 className="text-xl font-bold text-slate-900 line-clamp-2 hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Read More Button */}
                    <button
                      onClick={() => handleBlogClick(blog.slug)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center group"
                    >
                      Read Full Article
                      <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter Subscription */}
          <div className="mt-20 bg-slate-900 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Tax & Accounting Tips
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest tax tips,
              accounting insights, and financial strategies delivered directly
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              No spam, unsubscribe at any time. Your privacy is important to us.
            </p>
          </div>

          {/* Categories and Archive */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Tax Planning", count: 15, color: "bg-blue-600" },
              { name: "Bookkeeping", count: 12, color: "bg-green-600" },
              { name: "Business Tax", count: 8, color: "bg-purple-600" },
              { name: "Personal Finance", count: 10, color: "bg-orange-600" },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-lg border p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div
                  className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3`}
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
      </section>
    </div>
  );
};

export default Blogs;
