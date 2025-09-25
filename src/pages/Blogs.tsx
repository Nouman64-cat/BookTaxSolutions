import React from "react";
import { FiCalendar, FiUser, FiArrowRight, FiClock } from "react-icons/fi";

const Blogs: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "2024 Tax Season: Key Changes and Deadlines You Need to Know",
      excerpt:
        "Stay ahead of the curve with the latest tax law changes, new deductions, and important filing deadlines for the 2024 tax season.",
      content:
        "The 2024 tax season brings several important changes that individuals and businesses need to be aware of. From adjusted tax brackets to new deduction limits, understanding these changes can significantly impact your tax liability...",
      author: "Sarah Johnson, CPA",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Tax Planning",
      image: "/api/placeholder/600/300",
      tags: ["Tax Planning", "IRS Updates", "Deadlines"],
    },
    {
      id: 2,
      title: "Small Business Bookkeeping: Best Practices for Financial Success",
      excerpt:
        "Discover essential bookkeeping practices that can help your small business maintain accurate records and make informed financial decisions.",
      content:
        "Proper bookkeeping is the foundation of any successful business. Many small business owners struggle with maintaining accurate financial records, which can lead to compliance issues and missed opportunities...",
      author: "Michael Chen, EA",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Bookkeeping",
      image: "/api/placeholder/600/300",
      tags: ["Bookkeeping", "Small Business", "Financial Management"],
    },
    {
      id: 3,
      title: "Maximizing Business Deductions: A Comprehensive Guide",
      excerpt:
        "Learn about often-overlooked business deductions that could save your company thousands of dollars on taxes this year.",
      content:
        "Business deductions are one of the most effective ways to reduce your tax liability, but many business owners miss out on significant savings by not knowing what expenses qualify...",
      author: "Jennifer Martinez, CPA",
      date: "January 20, 2024",
      readTime: "10 min read",
      category: "Business Tax",
      image: "/api/placeholder/600/300",
      tags: ["Business Deductions", "Tax Savings", "Business Tax"],
    },
  ];

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <div className="text-slate-500 text-center">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm">Blog Image</div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-slate-500">
                      <FiClock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-slate-900 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <FiUser className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <FiCalendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center group">
                    Read Full Article
                    <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

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
