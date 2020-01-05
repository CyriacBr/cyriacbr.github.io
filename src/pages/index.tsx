import { NextPage } from "next";
import styled from "styled-components";
import { NavBar } from "../components/home/NavBar";
import { Sections } from "../components/home/Sections";
import '../index.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export interface HomeProps {
  sections: {
    about: string;
    skills: string;
    projects: string;
  };
}

const Home: NextPage<HomeProps> = ({ sections }) => (
  <Container>
    <NavBar />
    <br />
    <Sections sections={sections} />
  </Container>
);

Home.getInitialProps = async function(context) {
  const about = (await import(`../data/portfolio/About-en.md`)).default;
  const skills = (await import(`../data/portfolio/Skills-en.md`)).default;
  const projects = (await import(`../data/portfolio/Projects-en.md`)).default;
  return {
    sections: {
      about,
      skills,
      projects
    }
  } as HomeProps;
};

export default Home;
