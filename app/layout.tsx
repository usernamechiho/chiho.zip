import Main from "@/_components/Main";
import StyledComponentsRegistry from "./lib/registry";
import "./reset.css";
import { cookies } from "next/headers";

export const metadata = {
  title: "Chiho.zip",
  description: "Digital Garden for Chiho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme")?.value || "light";

  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Main theme={theme}>{children}</Main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
