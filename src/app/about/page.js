'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  /*** VARIABLES ***/

  /*** FUNCTIONS/HANDLERS ***/

  return (
    <div className="home">
      <div className="logo-display">
        <Link href="/">
        </Link>
      </div>
      <main>
        <section className="section">
          <div className="container">
            <h2 className="highlight-bg">About</h2>
            <div className="home-content">
              <p>
                Studio Sidefin is a web agency dedicated to crafting exceptional
                digital experiences. We believe in the power of simplicity and
                the importance of attention to detail.
              </p>
              <p>
                Our approach combines technical expertise with creative thinking,
                resulting in solutions that are both functional and beautiful.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
