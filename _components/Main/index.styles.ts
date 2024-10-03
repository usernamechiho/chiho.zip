import styled from "styled-components";

const Main = styled.main`
  background: ${({ theme }) => theme.background};
  width: 100%;
  height: 2000px;
  transition: background 0.3s;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 50px;
`;

export default { Main };
