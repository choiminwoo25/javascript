//(Ex. 1)
/*
styled 는 styled-components 라이브러리가 
export한 기본(default) 객체.
*/

// import styled from "styled-components";

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #bf4f74;
//   color: #bf4f74;
//   margin: 0 1em;
//   padding: 0.25em 1em;
//    `;

// export default function App() {
//   return <Button>Click Me</Button>;
// }


//(Ex. 2)
/* styled 는 styled-components 라이브러리가 
export한 기본(default) 객체. 
{ css } 는  styled-components가 제공하는 
 이름 있는(named) 함수로서 
조건부 CSS 묶음을 만들 때 사용하며 
조건부 스타일에서 자주 사용됨.
props.$primary : props 객체 안의 
$primary 속성(property)
*/

import styled, { css } from "styled-components";

const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
    `}
`;
export default function App() {
  return <Button $primary>Click Me</Button>;
}
