import { NextPage } from "next";
import matter from "gray-matter";
import "../index.css";
import { PageLayout } from "../components/shared/PageLayout";
import { BlogList } from "../components/shared/BlogList";

export interface Post {
  document: matter.GrayMatterFile<string>;
  slug: string;
}

export interface BlogProps {
  posts: Post[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => (
  <PageLayout>
    <BlogList posts={posts} />
  </PageLayout>
);

Blog.getInitialProps = function(context) {
  const posts = (context => {
    // grab all the files matching this context
    const keys: string[] = context.keys();
    // grab the values from these files
    const values: { default: string }[] = keys.map(context);
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default);
      // return the .md content & pretty slug
      return {
        document,
        slug
      };
    });
    // return all the posts
    return data;
    //@ts-ignore
  })(require.context("../data/blog", true, /\.md$/));

  return { posts };
};

export default Blog;
