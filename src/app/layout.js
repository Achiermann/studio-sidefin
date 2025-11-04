import { Anonymous_Pro } from "next/font/google";
import "../../styles/global.css";
import "../../styles/layout.css";
import Image from "next/image";
import Link from "next/link";

const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Studio Sidefin - Web Agency",
  description: "A web agency that creates web apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anonymousPro.className}>
        {/* <header className="header">
          <nav className="header-nav">
            <div className="header-nav-links">
              <Link href="/work" className="header-nav-link">Work</Link>
              <Link href="/about" className="header-nav-link">About</Link>
            </div>
          </nav>
          <div className="header-logo-display">
            <Link href="/">
              <Image src="/studio-sidefin-logo-2.png" alt="Studio Sidefin Logo" className="header-logo" width={200} height={200} />
            </Link>
          </div>
        </header> */}
        <main className="content">
          {children}
        </main>
      </body>
    </html>
  );
}
