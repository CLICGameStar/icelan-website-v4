import "@/styles/style.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { directus } from "@/directus";
import { readItems, readTranslations } from "@directus/sdk";

export const metadata = {
  title: "Icelan",
  description: "25h de tournois de jeux vidéo et jeux de plateau!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
