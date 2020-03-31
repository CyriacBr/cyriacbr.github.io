import fs from "fs";
import path from "path";

export interface BlogPost {
  title: string;
  date: Date;
  description: string;
  body: string;
  tags: string[];
  slug: string;
}

let cachedBlogPosts: BlogPost[];

export function getBlogPosts() {
  if (cachedBlogPosts) {
    return cachedBlogPosts;
  }
  const postsDirectory = path.join(process.cwd(), "src/data/blogPosts");
  const filenames = fs.readdirSync(postsDirectory) || [];

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const post = JSON.parse(fileContents);
    return post as BlogPost;
  });
  return (cachedBlogPosts = posts);
}
