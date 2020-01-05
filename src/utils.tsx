import styled, { ThemedStyledFunction } from "styled-components";

// export function makeMarkdownElement<T extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(StyledComp: ThemedStyledFunction<T, any, {}, never>) {
//   const H1 = styled.span`
//   font-size: 3.5em;
//   /* font-weight: 700;
//   background: linear-gradient(180deg,rgba(255,255,255,0) 50%, #2179f2 50%); */

//   position: relative;
//   color: #2179f2;
//   @media (min-width: 320px) and (max-width: 480px) {
//     font-size: 2em;
//   }

//   :after {
//     content: "";
//     position: absolute;
//     z-index: -1;
//     top: 60%;
//     left: -0.1em;
//     right: -0.1em;
//     bottom: 0;
//     transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
//     background-color: #2179f250;
//   }
// `;
// const Element: React.FC = ({ children, ...props }) => (
//   <StyledComp {...props}>{children}</StyledComp>
// );
// return Element;
// }