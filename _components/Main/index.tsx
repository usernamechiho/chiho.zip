"use client";

import Styled from "./index.styles";

import { ThemeProvider } from "styled-components";
import { LIGHT, DARK } from "@/_styles/colors";
import { cookies } from "next/headers";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Main({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) {
  const router = useRouter();

  useEffect(() => {
    const cookie = document.cookie;

    if (cookie === "") document.cookie = "theme=light; max-age=604800000";
  }, []);

  const handleCookieChange = () => {
    const cookie = document.cookie;

    if (cookie.includes("dark")) {
      document.cookie = "theme=light; max-age=604800000";
      router.refresh();
      return;
    }

    document.cookie = "theme=dark; max-age=604800000";
    router.refresh();
  };

  return (
    <ThemeProvider theme={theme === "light" ? LIGHT : DARK}>
      <Styled.Main>
        {children}
        <button onClick={handleCookieChange}>COOKIE</button>
      </Styled.Main>
    </ThemeProvider>
  );
}
