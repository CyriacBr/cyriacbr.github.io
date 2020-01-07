import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useStoreActions, useStoreState } from "../../store/hooks";

const Container = styled.div`
  display: flex;
  box-shadow: ${props =>
    props.theme.darkMode
      ? "0 8px 12px rgba(0,0,0,0.26)"
      : "0 8px 12px rgba(60, 90, 120, 0.1)"};
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
  }

  li {
    list-style: none;
    margin: 1em;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.5;
    }

    span {
      font-weight: 600;
      color: ${props => props.theme.colors.primary};
    }
  }

  .moon {
    cursor: pointer;
    color: ${props => (props.theme.darkMode ? "white" : "inherit")};

    &:hover {
      color: ${props => props.theme.colors.primary};
      opacity: 1;
    }
  }
`;

const Logo = styled.div`
  font-family: "Anton", sans-serif;
  display: flex;
  align-items: center;
  font-size: 2.5em;
  font-weight: 100;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.colors.primary};

  .initials {
    font-family: poppins;
    position: relative;
    top: 4px;
    font-weight: 700;
  }
`;

const NavBar: React.FC = () => {
  const setDarkMode = useStoreActions(actions => actions.setDarkMode);
  const darkMode = useStoreState(state => state.darkMode);
  return (
    <Container>
      <Layout className="page-layout">
        <Logo>
          <span>{`<`}</span>
          <span className="initials">CB</span>
          <span>{`/>`}</span>
        </Logo>
        <nav>
          <ul>
            <li>
              <a href="#">
                <span>01.</span> About Me
              </a>
            </li>
            <li>
              <a href="#">
                <span>02.</span> Blog
              </a>
            </li>
            <li>
              <a href="#">
                <span>03.</span> Get In Touch
              </a>
            </li>
            <li>
              <a
                href="#"
                className="moon"
                onClick={() => setDarkMode(!darkMode)}
              >
                <FontAwesomeIcon icon={faMoon} />
              </a>
            </li>
          </ul>
        </nav>
      </Layout>
    </Container>
  );
};

export { NavBar };