import { NextPage, GetStaticProps } from "next";
import "../index.css";
import { PageLayout } from "../components/shared/PageLayout";
import { BlogList } from "../components/shared/BlogList";
import { BlogPost, getBlogPosts } from "../data/helper";

export interface BlogProps {
  posts: BlogPost[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => (
  <PageLayout>
    <BlogList posts={posts} />
  </PageLayout>
);

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      posts: getBlogPosts()
    }
  };
};

export default Blog;
