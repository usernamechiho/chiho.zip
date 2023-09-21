import Header from "@/component/Header";
import "./reset.css";
import Navigation from "@/component/Navigation";
import Layout from "@/component/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <Navigation />

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
