import { ThemeProvider } from "next-themes";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider>
          <header />

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
