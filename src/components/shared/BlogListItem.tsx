import React from "react";
import styled from "styled-components";
import { Post } from "../../pages/blog";
import dayjs from "dayjs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${props =>
    props.theme.darkMode
      ? "0 8px 12px rgba(0,0,0,0.26)"
      : "0 4px 12px rgba(60, 90, 120, 0.1)"};
  border-radius: 5px;
  margin: 1em;
  background: ${props => props.theme.darkMode ? '#f5f5f5' : 'inherit'};
  color: #333333;
  /* box-shadow: 0 4px 12px rgba(60, 90, 120, 0.1); */
  cursor: pointer;
  position: relative;
  top: 0px;
  transition: all .5s ease;
  max-width: 300px;

  &:hover {
    top: 10px;
  }

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em;

  .title {
    font-weight: 700;
    font-size: 1.3em;
  }

  .desc {
    font-size: 14px;
    line-height: 1.6;
  }

  .footer {
    font-size: 14px;
    line-height: 1.6;
    opacity: .5;
  }

  .category {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-weight: 600;
    padding: 0.25em;
    padding-left: 0.25em;
    padding-right: 0.25em;
    border-radius: 4px;
    margin-right: 1em;
    font-weight: 300;
    white-space: pre;
    margin-bottom: 0.5em;
  }
`;

export interface PostData {
  title: string;
  date: Date;
  hero_image: string;
  category: string;
  desc: string;
}

interface BlogListItemProps {
  post: Post;
}

const BlogListItem: React.FC<BlogListItemProps> = ({ post }) => {
  const data = (post.document.data as any) as PostData;
  console.log("data :", data);
  const displayDate = () => {
    return dayjs(data.date).format("DD MMMM YYYY");
  };

  return (
    <Container>
      <img src="https://picsum.photos/300/125" alt="" />
      <Content>
        <span className="title">{data.title}</span>
        <p className="desc">{data.desc}</p>
        <div className="footer"> 
          <span className="category">{data.category}</span>
          <span>{displayDate()}</span>
        </div>
      </Content>
    </Container>
  );
};

export { BlogListItem };
