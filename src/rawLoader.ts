//@ts-ignore
import raw from "raw.macro";

export default {
  portfolio: {
    ComingSoon: raw('./data/portfolio/ComingSoon.md'),
    AboutEN: raw('./data/portfolio/About-en.md'),
    SkillsEN: raw('./data/portfolio/Skills-en.md'),
    ProjectsEN: raw('./data/portfolio/Projects-en.md'),
  }
} as { [section: string]: { [key: string]: string}};