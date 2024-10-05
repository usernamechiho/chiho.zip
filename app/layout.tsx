import "./reset.css";
import { cookies } from "next/headers";

export const metadata = {
  title: "Chiho.zip",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme")?.value || "light";

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
