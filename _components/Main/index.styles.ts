import styled from "styled-components";

const Main = styled.main`
  background: ${({ theme }) => theme.body};
  height: 100vh;
  transition: background 0.3s;
`;

export default { Main };
