import { NextPage } from "next";
import styled from "styled-components";
import { Post } from "../blog.jsx";
import { PageLayout } from "../../components/shared/PageLayout.jsx";
import matter from "gray-matter";

export interface PostPageProps {
  post: Post;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => (
  <PageLayout>
    
  </PageLayout>
);

PostPage.getInitialProps = async function(context) {
  // context contains the query param
  const { slug } = context.query
  // grab the file in the posts dir based on the slug
  const content = await import(`../../data/blog/${slug}.md`)
  // also grab the config file so we can pass down siteTitle
  const data = matter(content.default);
  return {
    post: {
      document: data,
      slug
    } as Post
  };
};

export default PostPage;
