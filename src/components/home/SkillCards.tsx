import React from "react";
import styled from "styled-components";
import { PortfolioCard } from "./PortfolioCard";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: -50px;
  transform: translateY(100px);
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 0;
    transform: none;
  }

  > :first-child {
  }

  > :nth-child(n) {
    margin: 1em 2em 1em 2em;
  }

  .stack .inner {
    text-align: left;
  }

  .skill-item {
    white-space: normal;
  }
`;

const SkillCards: React.FC = () => {
  return (
    <Container>
      <PortfolioCard title="Full-Stack Web Dev.">
        <div className="skill-item">ReactJS</div>
        <div className="skill-item">VueJS, Angular2+</div>
        <div className="skill-item">NodeJS, NestJS</div>
        <div className="skill-item">ASP.Net, JEE</div>
      </PortfolioCard>
      <PortfolioCard title="Mobile Dev.">
        <div className="skill-item">Ionic</div>
        <div className="skill-item">ReactNative</div>
      </PortfolioCard>
      {/* <Card className="stack" title="Preferred Stack">
        <div className="skill-item">
          <span className="highlighted">01. </span>Gatsby + NestJS
        </div>
        <div className="skill-item">
          <span className="highlighted">02. </span>Nuxt SSR + NestJS
        </div>
        <div className="skill-item">
          <span className="highlighted">03. </span>Angular + ASP.Net
        </div>
        <div className="skill-item">
          <span className="highlighted">04. </span>TypeORM + MySQL
        </div>
        <div className="skill-item">
          <span className="highlighted">05. </span>Figma
        </div>
      </Card> */}
    </Container>
  );
};

export { SkillCards };
