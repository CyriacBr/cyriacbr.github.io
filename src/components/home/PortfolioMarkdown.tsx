import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import { Emoji } from "../shared/Emoji";
import { PortfolioCard } from "./PortfolioCard";
import { SkillCards } from "./SkillCards";
import { ProjectsSection } from "./ProjectsSection";
import { Button } from "../shared/Button";

const H1 = styled.span`
  font-size: 3.5em;
  font-weight: 700;

  position: relative;
  color: ${({ theme }) => theme.colors.primary};
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 2em;
  }
`;
const H1Element: React.FC = ({ children, ...props }) => (
  <H1 {...props}>{children}</H1>
);

const P = styled.p`
  font-weight: 300;
  line-height: 1.4;
  font-size: 1.5em;
  max-width: 40em;
`;
const PElement: React.FC = ({ children, ...props }) => (
  <P {...props}>{children}</P>
);

const A = styled.a`
  color: inherit;
  position: relative;
  text-decoration: none;
  font-weight: 500;
  white-space: pre;
`;
const AElement: React.FC = ({ children, ...props }) => (
  <A {...props}>{children}</A>
);

const Strong = styled.strong`
  position: relative;
  font-weight: 500;
  white-space: pre;
`;
const StrongElement: React.FC = ({ children, ...props }) => (
  <Strong {...props}>{children}</Strong>
);

const LI = styled.li`
  font-size: 1.5em;
`;
const LIElement: React.FC = ({ children, ...props }) => (
  <LI {...props}>{children}</LI>
);

export interface MyMarkdownProps {
  markdown: string;
}

const PortfolioMarkdown: React.FC<MyMarkdownProps> = ({ markdown }) => {
  return (
    <Markdown
      options={{
        overrides: {
          Emoji: {
            component: Emoji as any
          },
          Button: {
            component: Button
          },
          SkillCards: {
            component: SkillCards
          },
          ProjectsSection: {
            component: ProjectsSection
          },
          h1: {
            component: H1Element
          },
          p: {
            component: PElement
          },
          a: {
            component: AElement
          },
          strong: {
            component: StrongElement
          },
          li: {
            component: LIElement
          }
        }
      }}
    >
      {markdown}
    </Markdown>
  );
};

export { PortfolioMarkdown };
