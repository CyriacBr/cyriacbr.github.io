import React from "react";
import styled from "styled-components";
import { BlogProps } from "../../pages/blog";
import { BlogListItem } from "./BlogListItem";

const Container = styled.div`
  display: flex;
  padding: 3em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

type BlogListProps = BlogProps;

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map(p => (
        <BlogListItem key={p.slug} post={p} />
      ))}
    </Container>
  );
};

export { BlogList };
