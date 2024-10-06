"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  if (!isMounted) return null;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.container}>
      <h1
        className={styles.intro}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        코드는 짧게, 커피는 길게.
      </h1>

      <br />
      <br />

      <p className={styles.name}>이치호</p>

      <br />

      <p>현재 Sellernote에서 프론트엔드 개발자로 일하고 있습니다.</p>
    </div>
  );
}
