import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiUser,
  FiShare2,
} from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { blogService } from "../services/blogService";
import type { Blog } from "../types/blog";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        setError("Blog slug not found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedBlog = await blogService.getBlogBySlug(slug);
        if (fetchedBlog) {
          setBlog(fetchedBlog);
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError("Failed to load blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-slate-200 border-t-blue-600 mx-auto"></div>
          </div>
          <p className="text-slate-600">
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="text-center max-w-md space-y-6 px-4">
          <div className="text-6xl">📰</div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Oops! Article Not Found
            </h2>
            <p className="text-slate-600">
              {error || "The blog post you're looking for doesn't exist."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/blogs")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Blogs
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button - Fixed */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            <FiArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </button>
        </div>
      </div>

      {/* Hero Image */}
      {blog.image?.url && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={blog.image.url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </div>
      )}

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
              {blog.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                <FiUser className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">
                  Written by
                </p>
                <p className="font-semibold text-slate-900">
                  BookTax Team
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="h-4 w-4" />
              <span>Published Recently</span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
            <button className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors">
              <FiShare2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-slate-900 mt-12 mb-6 first:mt-0 pb-3 border-b border-slate-200">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-5">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="space-y-3 mb-8 ml-6">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="space-y-3 mb-8 ml-6">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-slate-700 leading-relaxed text-lg flex items-start">
                  <span className="mr-3 text-blue-600 mt-1.5">
                    •
                  </span>
                  <span>{children}</span>
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-600 pl-6 py-4 my-8 italic text-slate-700 bg-blue-50 rounded-r-xl">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-slate-100 text-blue-600 px-2 py-1 rounded text-sm font-mono border border-slate-200">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto mb-8 shadow-lg border border-slate-700">
                  {children}
                </pre>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-slate-900">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-slate-700">
                  {children}
                </em>
              ),
            }}
          >
            {blog.content.markdown}
          </ReactMarkdown>
        </div>

        {/* Tags/Categories */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap gap-3">
            <span className="text-sm font-medium text-slate-600">
              Tags:
            </span>
            {["Tax Planning", "Accounting", "Finance"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row gap-4 justify-between">
          <button
            onClick={() => navigate("/blogs")}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors group"
          >
            <FiArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Blogs
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center bg-slate-200 hover:bg-slate-300 text-slate-900 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Back to Top
          </button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-3">
            Enjoyed this article?
          </h3>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for more tax tips and financial
            insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 bg-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="bg-white hover:bg-blue-50 text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
