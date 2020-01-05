import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
//@ts-ignore
import FsLightbox from "fslightbox-react";

const Container = styled.div`
  display: flex;
  margin: 2em;
  flex-wrap: wrap-reverse;

  @media (max-width: 1000px) {
    justify-content: center;
  }

  .slider {
    width: 600px;
    max-height: 400px;
    margin: 0px auto;
    background: #eee;
    border-radius: 5px;
    cursor: zoom-in;

    img {
      border-radius: 5px;
      width: 600px;
      @media (min-width: 320px) and (max-width: 480px) {
        width: inherit;
      }
    }

    .carousel {
      position: relative;
    }

    .carousel__dot-group {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      background: #4444445c;
      z-index: 1;

      button {
        z-index: 2;
        margin-left: 0.5em;
        margin-right: 0.5em;
        -webkit-appearance: none;
        width: 12px;
        height: 12px;
        background: #f5f5f5;
        border-radius: 50%;
        border: none;
      }

      .carousel__dot--selected {
        background: #2179f2;
      }
    }
  }

  div[class*="slideInner"] {
    display: flex;
    align-items: flex-start;
    background-color: ${props => props.color || "inherit"};
  }

  .content {
    width: 50%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  .subtitle {
    /* color: rgba(0,0,0,.3); */
    font-size: 0.8em;
    opacity: 0.7;
  }

  .title {
    font-size: 2.25em;
    max-width: 8em;

    @media (max-width: 1000px) {
      max-width: 60%;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      max-width: 100%;
    }
  }

  hr {
    height: 3px;
    width: 50px;
    border: 0;
    background-color: #0085ff;
    margin: 0;
    margin-bottom: 1em;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  .tag-item {
    background: #0085ff;
    color: white;
    font-weight: 600;
    padding: 0.25em;
    padding-left: 0.25em;
    padding-right: 0.25em;
    border-radius: 4px;
    margin-right: 1em;
    font-weight: 300;
    white-space: pre;
    margin-bottom: 0.5em;
  }

  .desc {
    font-weight: 300;
    line-height: 1.4;
    font-size: 1.5em;
    max-width: 25em;
  }
`;

export interface ProjectItem {
  title: string;
  subTitle: string;
  tags: string[];
  desc: string;
  fileId: string;
  filesNumber: number;
  links: [string, string][];
  backColor: string;
  uncenteredFilesId: number[];
}

const Project: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const [toggleLightbox, setToggleLightbox] = useState(false);

  const onImgClick = useCallback((src: string) => {
    setToggleLightbox(v => !v);
  }, []);

  return (
    <>
      <FsLightbox
        toggler={toggleLightbox}
        sources={[...Array(project.filesNumber).keys()].map(
          i => `project-images/${project.fileId}/${i}.png`
        )}
      />
      <Container color={project.backColor}>
        <div className="slider">
          <CarouselProvider
            naturalSlideWidth={600}
            naturalSlideHeight={400}
            totalSlides={project.filesNumber}
            orientation="horizontal"
            dragEnabled={false}
          >
            {
              <Slider>
                {[...Array(project.filesNumber).keys()].map(i => (
                  <Slide index={i} key={i}>
                    <img
                      src={`project-images/${project.fileId}/${i}.png`}
                      alt=""
                      style={{
                        alignSelf: project.uncenteredFilesId.includes(i)
                          ? "none"
                          : "center"
                      }}
                      onClick={() =>
                        onImgClick(`project-images/${project.fileId}/${i}.png`)
                      }
                    />
                  </Slide>
                ))}
              </Slider>
            }
            <DotGroup />
          </CarouselProvider>
        </div>
        <div className="content">
          <span className="subtitle">{project.subTitle}</span>
          <span className="title">{project.title}</span>
          <hr />
          <div className="tags">
            {project.tags.map(t => (
              <span className="tag-item" key={t}>{t}</span>
            ))}
          </div>
          <p className="desc">{project.desc}</p>
        </div>
      </Container>
    </>
  );
};

export { Project };
