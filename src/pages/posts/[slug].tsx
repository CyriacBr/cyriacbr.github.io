import { NextPage, GetStaticProps } from "next";
import { PageLayout } from "../../components/shared/PageLayout";
import { getBlogPosts, BlogPost } from "../../data/helper";

export interface PostPageProps {
  post: BlogPost;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => (
  <PageLayout></PageLayout>
);

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;
  const post = getBlogPosts().find(v => v.slug === slug);
  return {
    props: {
      post
    }
  };
};

export async function getStaticPaths() {
  const paths = getBlogPosts().map(post => `/posts/${post.slug}`);
  return { paths, fallback: false };
}

export default PostPage;
