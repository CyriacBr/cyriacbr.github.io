import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import VanillaTilt from 'vanilla-tilt';

const Container = styled.div`
  display: flex;
  justify-content: center;

  .header {
    color: #171c28;
    font-size: 1.5em;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-color: rgba(0,0,0,.05);
    font-weight: 500;
  }

  .inner {
    display: inline-block;
    box-shadow: 0 8px 12px rgba(60, 90, 120, 0.1);
    background: rgb(251,252,253);
    white-space: pre;
    padding: 2em;
    padding-top: 0;
    border-radius: 4px;
    text-align: center;
    line-height: 1.7em;
    letter-spacing: 4px;
    color: #121314;
    font-weight: 300;
  }
`;

export interface CardProps {
  className?: string;
  title?: string;
}

const PortfolioCard: React.FC<CardProps> = ({ children, className, title }) => {
  const ref = useRef();
  useEffect(() => {
    VanillaTilt.init(ref.current as any,{});
  }, []);

  return (
    <Container ref={ref as any} className={className}>
      <div className="inner">
        {title && (
          <>
            <div className="header">
              {title}
            </div>
            <br/>
          </>
        )}
        {children}
      </div>
    </Container>
  );
};

export { PortfolioCard };