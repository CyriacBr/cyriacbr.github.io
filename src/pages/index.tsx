import { NextPage } from "next";
import styled from "styled-components";
import { Sections } from "../components/home/Sections";
import { PageLayout } from "../components/shared/PageLayout";

export interface HomeProps {
  sections: {
    about: string;
    skills: string;
    projects: string;
  };
}

const Home: NextPage<HomeProps> = ({ sections }) => (
  <PageLayout>
    <Sections sections={sections} />
  </PageLayout>
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
