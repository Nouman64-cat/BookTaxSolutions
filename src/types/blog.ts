export interface BlogImage {
  url: string;
}

export interface BlogContent {
  markdown: string;
}

export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  image: BlogImage;
  content: BlogContent;
}

export interface BlogsResponse {
  blogs: Blog[];
}
