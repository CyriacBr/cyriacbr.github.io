import React from "react";
import styled from "styled-components";

const s = {
  Container: styled.div`
    background: #0085ff;
    display: inline-block;
    border-radius: 11px;
    padding: 0.5em 1em;
    margin-right: 1em;
    text-align: center;
    color: #fff;
    border: none;
    font-weight: 700;
    transition: all 0.2s ease-out;
    font-size: 0.9em;
    cursor: pointer;
    outline: 0;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: inherit;
      }
    }
  `
};

interface ButtonProps {
  title: string;
  url?: string;
}

const Button: React.FC<ButtonProps> = ({ title, url }) => {
  return (
    <s.Container>
      {url ? <a href={url}>{title}</a> : <span>{title}</span>}
    </s.Container>
  );
};

export { Button };
