import Main from "@/_components/Main";
import StyledComponentsRegistry from "./lib/registry";
import "./reset.css";

export const metadata = {
  title: "Chiho.zip",
  description: "Digital Garden for Chiho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Main>{children}</Main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
