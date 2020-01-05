import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  box-shadow: 0 0 40px rgb(6, 32, 93);
  background: #06205d;
  color: white;

  box-shadow: 0 8px 12px rgba(60, 90, 120, 0.1);
  background: rgb(251, 252, 253);
  color: #333;

  .page-layout {
    display: flex;
    justify-content: space-between;

    .logo {
      font-family: "Anton", sans-serif;
      display: flex;
      align-items: center;
      font-size: 3em;
      font-weight: 700;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
      background: white;
      color: #0085ff;

      .initials {
        font-family: poppins;
        position: relative;
        top: 4px;
        font-weight: 700;
      }
    }

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
        opacity: .5;
      }

      span {
        font-weight: 600;
        color: #0085ff;
      }
    }
  }
`;

const NavBar: React.FC = () => {
  return (
    <Container>
      <div className="page-layout">
        <div className="logo">
          {/* <span>cyriacbr</span>
          <span>.me</span> */}
          <span>{`<`}</span>
          <span className="initials">CB</span>
          <span>{`/>`}</span>
        </div>
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
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export { NavBar };
