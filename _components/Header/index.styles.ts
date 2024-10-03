import styled from "styled-components";

const Header = styled.header<{ isTop: boolean }>`
  background: ${({ theme, isTop }) =>
    isTop ? theme.background : "transparent"};

  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;

  border-bottom: 1px solid ${({ theme }) => theme.divider};
  padding: 0px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  backdrop-filter: blur(10px);
`;

export default { Header };
