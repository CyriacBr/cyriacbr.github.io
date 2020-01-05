import React from "react";
import styled from "styled-components";
import { PortfolioMarkdown } from "./PortfolioMarkdown";

const s = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 480px) {
      margin: 1em;
    }

    .section {
      margin-bottom: 4em;
      position: relative;
    }
  `,
  AboutSection: styled.div``,
  SkillsSection: styled.div`
    background-color: #06205d;

    background: #0085ff;
    @media (min-width: 320px) and (max-width: 480px) {
      margin: -1em;
      padding: 1em;
    }

    span,
    p {
      color: white;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);

      .highlighted {
        color: #2179f2;
      }
    }

    :after {
      /* display: none; */
      content: "";
      position: absolute;
      z-index: -1;
      bottom: 0%;
      transform: translateY(50px);
      /* background-color: #2179f2; */
      background-image: url(wave5.svg);
      background-size: 100% 70px;
      position: absolute;
      height: 70px;
      width: 100%;
      @media (min-width: 320px) and (max-width: 480px) {
        background-image: none;
      }
    }

    :before {
      /* display: none; */
      content: "";
      z-index: -1;
      background-image: url(wave2.svg);
      background-size: 100% 70px;
      position: absolute;
      height: 70px;
      width: 100%;
      top: -70px;
      @media (min-width: 320px) and (max-width: 480px) {
        content: none;
      }
    }
  `,
  ProjectsSection: styled.div`
    margin-top: 2em;
    @media (min-width: 320px) and (max-width: 480px) {
      padding-top: 3em;
    }
  `
};

export interface SectionsProps {
  sections: {
    about: string;
    skills: string;
    projects: string;
  };
}

const Sections: React.FC<SectionsProps> = ({ sections }) => {
  return (
    <s.Container>
      <s.AboutSection className="section">
        <div className="page-layout">
          <PortfolioMarkdown markdown={sections.about} />
        </div>
      </s.AboutSection>
      <s.SkillsSection className="section">
        <div className="page-layout">
          <PortfolioMarkdown markdown={sections.skills} />
        </div>
      </s.SkillsSection>
      <s.ProjectsSection className="section">
        <div className="page-layout">
          <PortfolioMarkdown markdown={sections.projects} />
        </div>
      </s.ProjectsSection>
    </s.Container>
  );
};

export { Sections };
