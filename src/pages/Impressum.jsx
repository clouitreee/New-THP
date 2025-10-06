import { motion } from 'framer-motion'
import Seo from '@/components/common/Seo'

const Impressum = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen py-20">
      <Seo
        title="Impressum - Tech Hilfe Pro"
        description="Impressum von Tech Hilfe Pro, Ihrem IT-Support in Köln und Neuss. Angaben gemäß § 5 TMG."
        keywords="Impressum, Tech Hilfe Pro, IT-Support Köln, IT-Dienstleister Neuss, § 5 TMG"
        ogUrl="https://techhilfe-ew9dxg.manus.space/impressum"
      />
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold">Impressum</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="mt-8 mb-4 text-2xl font-bold">Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>Tech Hilfe Pro</strong>
              <br />
              José Carlos Martín Lache
              <br />
              [Straße und Hausnummer]
              <br />
              [PLZ] Köln/Neuss
              <br />
              Deutschland
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold">Kontakt</h2>
            <p>
              Telefon:{' '}
              <a
                href="tel:+4915565029989"
                className="text-blue-600 hover:underline"
                aria-label="Telefonnummer +49 155 65029989"
              >
                +49 155 65029989
              </a>
              <br />
              E-Mail:{' '}
              <a
                href="mailto:info@techhilfepro.de"
                className="text-blue-600 hover:underline"
                aria-label="E-Mail-Adresse info@techhilfepro.de"
              >
                info@techhilfepro.de
              </a>
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              [Umsatzsteuer-ID]
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              Berufsbezeichnung: IT-Dienstleister
              <br />
              Zuständige Kammer: [Zuständige IHK]
              <br />
              Verliehen in: Deutschland
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              José Carlos Martín Lache
              <br />
              [Adresse wie oben]
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                aria-label="Link zur Online-Streitbeilegung der Europäischen Kommission"
              >
                {' '}
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-bold">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
              dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

            <p className="text-muted-foreground mt-8 text-sm">
              Quelle:{' '}
              <a
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Quelle e-recht24.de"
              >
                e-recht24.de
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Impressum
