import { GraphQLClient } from "graphql-request";
import type { Blog, BlogsResponse } from "../types/blog";

const HYGRAPH_ENDPOINT =
  "https://ap-south-1.cdn.hygraph.com/content/cmfz8yj9502n307um4gr9cu4w/master";

const HYGRAPH_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NTg4Njc1NDcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtZno4eWo5NTAybjMwN3VtNGdyOWN1NHcvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiIwZWI0NDVlNS1lY2RkLTRiZTktYTUwZi0zZjY0NDM3MzYzMDEiLCJqdGkiOiJjbWcwZ2JwN2IwYnN0MDdwZmFwd20xeXpjIn0.PPs0KnsK7N2-lq4RgGbtDCiODaK0VzqIFXppjBGDgesUqXnvXrmEu-t1SppWvYTLKrmImphQM1cTgAp6nic2lagBnt_4brNSi5snfpMMrmtg7f8RwASqwmFgVnlVoE4KrYUn02jTQ6j0DmZbgmvYowlY7XR9FHvEjiDxpPsy8RVatls_xMveQcUL2zWkJVjhXuzRTJHaFGWMB_92FNBKMl-tsm1DzvBx6gT7yJzlVK8OQYPnECENzhTg_pZLYsRLai4DqlhWZ7fPI2KeqOVFRqIXG-83bZ4j3LBywHKZeE7zGJj_arzlJV1sWXbQQF21zoo3Vm9qEk-1QbQ5MxTjCR9oInV0sH5DIDW19eemQk8MF6xg9qdPL-xXlFNtvUzQuk4h3UyC21PXT6QFkxwFH_Ji7IlYtPyevlDhr5IueNXCUN7_Il-cFfMQwpcReoJxII1PU2PWDy5sdNGdE_t_rSUs5KcSwA0mk9-tuE5qZU977RAEjMLSjQYxVg0LFcHCCJwHX8hODiW9BJGGZGF3i6IcuAZLG0sUun1rlaW4UGUOxp9eTogvRicryjQbCbruvv9LvoXZ11S4hGf2STbybrUz_A8v91fXk3lX9tQNcjygtcN0jcz05qJMk0n3CwPuKSveiWmNBpMalT0Orflm5zxH6RBSckVQfjjjsAwjDHk";

const client = new GraphQLClient(HYGRAPH_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_TOKEN}`,
  },
});

// Query to get all blogs
const GET_BLOGS_QUERY = `
  query GetBlogs {
    blogs {
      content {
        markdown
      }
      excerpt
      image {
        url
      }
      slug
      title
    }
  }
`;

// Query to get a single blog by slug
const GET_BLOG_BY_SLUG_QUERY = `
  query GetBlogBySlug($slug: String!) {
    blog(where: { slug: $slug }) {
      content {
        markdown
      }
      excerpt
      image {
        url
      }
      slug
      title
    }
  }
`;

export const blogService = {
  // Fetch all blogs
  async getAllBlogs(): Promise<Blog[]> {
    try {
      const data = await client.request<BlogsResponse>(GET_BLOGS_QUERY);
      return data.blogs;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  },

  // Fetch a single blog by slug
  async getBlogBySlug(slug: string): Promise<Blog | null> {
    try {
      const data = await client.request<{ blog: Blog }>(
        GET_BLOG_BY_SLUG_QUERY,
        { slug }
      );
      return data.blog;
    } catch (error) {
      console.error("Error fetching blog by slug:", error);
      throw error;
    }
  },
};
