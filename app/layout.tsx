import { ThemeProvider } from "next-themes";
import styles from "./layout.module.scss";
import "./reset.css";

import localFont from "next/font/local";

const font = localFont({
  src: "../public/fonts/NotoSerifKR-VariableFont_wght.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={styles.body}>
        <ThemeProvider>
          <header className={styles.header} />

          <main className={`${styles.main} ${font.className}`}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
