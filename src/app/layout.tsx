//SSG 

import Footer from "../components/Footer";
import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
