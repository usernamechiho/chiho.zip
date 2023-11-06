import Header from "@/component/Header";
import "./_styles/reset/reset.css";
import Navigation from "@/component/Navigation";
import Layout from "@/component/Layout";
import localFont from "next/font/local";

const customFont = localFont({
  src: [
    {
      path: "./_styles/font/Pretendard-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./_styles/font/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_styles/font/Pretendard-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFont.className}>
      <body>
        <Header />

        <Navigation />

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
