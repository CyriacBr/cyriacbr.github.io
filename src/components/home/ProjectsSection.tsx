import React, { CSSProperties, useState, useEffect } from "react";
import styled from "styled-components";
import { ProjectItem, Project } from "./Project";
import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const items: ProjectItem[] = [
  {
    title: "IDE 4.0",
    subTitle: "Personal Work, 2019",
    desc: `A real-time web app for sharing and collaborate on codebases. In the long run, the app is intended to be 
    used in school settings, and allow teachers to easily follow their students,
    give assignments and work on the same code as them.`,
    tags: ["In Progress", "Web App", "React", "Node Backend"],
    links: [],
    fileId: "collab",
    filesNumber: 2,
    backColor: "#CA4C43",
    uncenteredFilesId: []
  },
  {
    title: "Printech Website And Admin Panel.",
    subTitle: "Freelance Work, 2019",
    desc: `A website for a web agency with an admin panel for managing the site.`,
    tags: ["Gatsby", "Node Backend"],
    links: [],
    fileId: "printech",
    filesNumber: 5,
    backColor: "#4A90E2",
    uncenteredFilesId: [0, 1, 2]
  },
  {
    title: "Fleet Management App Mockups.",
    subTitle: "Freelance Work, 2019",
    desc: `The client dropped the project halfway, here are the mockups I designed with Figma.`,
    tags: ["UI/UX Design", "Figma"],
    links: [],
    fileId: "fleet",
    filesNumber: 2,
    backColor: "#F8EA45",
    uncenteredFilesId: [0, 1]
  },
  {
    title: "Internships Management App for Schools.",
    subTitle: "Assignment Work, 2019",
    desc: `A real-time app where students, supervisors and tutors can collaborate and manage internships.`,
    tags: ["Angular", "Socket.io", "Node Backend"],
    links: [],
    fileId: "internships_app",
    filesNumber: 6,
    backColor: "#009688",
    uncenteredFilesId: []
  },
  {
    title: "CRM App",
    subTitle: "Freelance Work, 2018",
    desc: `A wep app for a business to handle their customers and follow them closely throughout
    the different services the business offers.`,
    tags: ["VueJS", "Node Backend"],
    links: [],
    fileId: "crm_glanv",
    filesNumber: 4,
    backColor: "#4A90E2",
    uncenteredFilesId: []
  }
];

const ProjectsSection: React.FC = () => {
  const [trail, set] = useTrail(
    items.length,
    () =>
      ({
        position: "relative",
        opacity: 0,
        top: 0
      } as any)
  );
  const [ref, inView] = useInView();
  const [springLoaded, setSpringLoaded] = useState(false);
  useEffect(() => {
    if (inView && !springLoaded) {
      setSpringLoaded(true);
      set({
        position: "relative",
        from: { opacity: 0, top: -100 },
        opacity: 1,
        top: 0,
        reset: true
      });
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      {trail.map((style, i) => (
        <animated.div style={style} key={i}>
          <Project project={items[i]} />
        </animated.div>
      ))}
    </Container>
  );
};

export { ProjectsSection };
