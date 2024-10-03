"use client";

import Styled from "./index.styles";

import { ThemeProvider } from "styled-components";
import { LIGHT, DARK } from "@/_styles/colors";
import { useEffect } from "react";
import { ONE_WEEK } from "@/_constants/time";
import Header from "../Header";

export default function Main({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) {
  useEffect(() => {
    const cookie = document.cookie;

    if (cookie === "") document.cookie = `theme=light; max-age=${ONE_WEEK}`;
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? LIGHT : DARK}>
      <Header />

      <Styled.Main>{children}</Styled.Main>
    </ThemeProvider>
  );
}
