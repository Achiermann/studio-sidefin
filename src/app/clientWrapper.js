'use client';

import Link from 'next/link';
import Image from 'next/image';
import '../../styles/main-content.css';

export default function ClientWrapper() {
  /*** VARIABLES ***/

  /*** FUNCTIONS/HANDLERS ***/

  return (
     <main>
       <div className="header-logo-display">
      <Image src="/studio-sidefin-logo-2.png" alt="Studio Sidefin Logo" className="header-logo" width={300} height={300} />
        </div>
        <section className="section">
          <div className="container">
            <h2 className="highlight-bg">Studio Sidefin</h2>
            <div className="main-content">
              <p>
                Das Studio-Sidefin in Zürich spezialisiert sich auf massgeschneiderte Web- oder Standalone-Apps um 
                deinen Arbeitsalltag einfacher zu gestalten. <br/><br/>
                Du arbeitest mit diversen Excel Tabellen, mühsamen WhatsApp-Gruppen und musst Daten aus deinen
                tiefen deiner Cloud zusammen kratzen? Lass mich dir und deinem Team helfen, die Arbeitsprozesse zu
                vereinfachen, logische Strukturen zu schaffen und den Datenfluss zu zentralisieren.
              </p>
              <h2 className="highlight-bg">Für wen?</h2>
              <p>
                Das Studio Sidefin richtet sich an KMUs, kleinere Agenturen und Privatpersonen, die eine massgeschneiderte
                Lösung für ihre Arbeitsprozesse suchen, jedoch nicht über die finanziellen Mittel verfügen um ein riesiges IT-Büro, 
                was ich nicht bin, dafür anzuheuern. Ich biete also auch Übersicht und Klarheit in der gemeinsamen Kommunikation. 
                Der persönliche Kontakt ist dabei ausschlaggebend.<br/><br/>
                Ich spezialisiere ich mich auf die Bereiche Kultur, insbesondere Musik, sowie jegliche Bereiche rund um 
                Themen wie Sport, Natur und Nachhaltigkeit. 
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}
