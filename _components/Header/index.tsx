"use-client";

import { useEffect, useState } from "react";
import Styled from "./index.styles";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const detectScroll = () => setIsTop(window.scrollY === 0);

    window.addEventListener("scroll", detectScroll);

    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  return (
    <Styled.Header isTop={isTop}>
      <ThemeButton />
    </Styled.Header>
  );
}
