import React from "react";
import styled from "styled-components";
import { NavBar } from "./NavBar";
import '../../index.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;

interface PageLayoutProps {}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <br />
      {children}
    </Container>
  );
};

export { PageLayout };
