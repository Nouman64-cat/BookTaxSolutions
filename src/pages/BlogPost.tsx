import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
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
      <div className="min-h-screen pt-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen pt-20 flex justify-center items-center">
        <div className="text-center">
          <div className="text-red-600 text-lg font-medium mb-4">
            {error || "Blog post not found"}
          </div>
          <button
            onClick={() => navigate("/blogs")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mr-4"
          >
            Back to Blogs
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate("/blogs")}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <FiArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </button>
      </div>

      {/* Hero Image */}
      {blog.image?.url && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img
              src={blog.image.url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Title */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              {blog.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex items-center space-x-6 text-sm text-slate-500 border-b border-slate-200 pb-6">
            <div className="flex items-center">
              <FiCalendar className="mr-2 h-4 w-4" />
              <span>Published</span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-2 h-4 w-4" />
              <span>5 min read</span>
            </div>
          </div>
        </header>

        {/* Blog Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold text-slate-900 mt-8 mb-4 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-slate-700 leading-relaxed mb-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-slate-700 mb-6 space-y-2">
                  {children}
                </ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-600 pl-6 py-2 italic text-slate-700 bg-slate-50 rounded-r-lg mb-6">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm font-mono">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto mb-6">
                  {children}
                </pre>
              ),
            }}
          >
            {blog.content.markdown}
          </ReactMarkdown>
        </div>

        {/* Back to Blogs */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <button
            onClick={() => navigate("/blogs")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center"
          >
            <FiArrowLeft className="mr-2 h-4 w-4" />
            Back to All Blogs
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
