import { css } from "@emotion/react";

const color = "red";

export default function Header() {
  return (
    <header
      css={css`
        color: ${color};
      `}
    >
      Header
    </header>
  );
}
