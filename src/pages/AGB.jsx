import { motion } from 'framer-motion'

const AGB = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Tech Hilfe Pro 
              (nachfolgend „Anbieter") und seinen Kunden (nachfolgend „Kunde") über IT-Support-Dienstleistungen.
            </p>
            <p>
              Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nur 
              dann und insoweit Vertragsbestandteil, als der Anbieter ihrer Geltung ausdrücklich schriftlich zugestimmt hat.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Vertragsgegenstand und Leistungen</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">2.1 IT-Support-Dienstleistungen</h3>
            <p>
              Der Anbieter erbringt IT-Support-Dienstleistungen für Privatkunden und Unternehmen, insbesondere:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Hardware-Reparaturen und -Wartung</li>
              <li>Software-Installation und -Konfiguration</li>
              <li>Cybersicherheits-Beratung und -Implementierung</li>
              <li>NIS2-Compliance-Audits</li>
              <li>Home-Office-Optimierung</li>
              <li>Digitalisierungs-Beratung</li>
              <li>Remote- und Vor-Ort-Support</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">2.2 Abonnement-Modelle</h3>
            <p>
              Der Anbieter bietet verschiedene Abonnement-Modelle an:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Basis-Abonnement (9,90 €/Monat):</strong> 24/7 Remote-Support, unbegrenzter E-Mail & Chat Support, 
              automatische Backups, NIS2-Basis-Check, monatliche Sicherheitsupdates, Zugang zu Online-Tutorials</li>
              <li><strong>Premium-Abonnement (24,90 €/Monat):</strong> Alle Basis-Features plus Prioritäts-Support vor Ort 
              (Köln/Neuss), NIS2-Compliance-Audits, quartalsweise Sicherheitsanalysen, kostenlose Webinare & Schulungen, 
              dedizierter Account Manager, erweiterte Backup-Lösungen, Incident Response Service</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">2.3 Testphase</h3>
            <p>
              Neue Abonnenten erhalten eine 14-tägige kostenlose Testphase. Während dieser Zeit kann das Abonnement 
              jederzeit ohne Angabe von Gründen gekündigt werden.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Vertragsschluss</h2>
            <p>
              Der Vertrag kommt durch Annahme des Angebots des Anbieters durch den Kunden zustande. Dies kann erfolgen durch:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Abschluss eines Abonnements über die Website</li>
              <li>Schriftliche Auftragsbestätigung</li>
              <li>Beginn der Leistungserbringung nach Auftragserteilung</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Preise und Zahlungsbedingungen</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">4.1 Preise</h3>
            <p>
              Es gelten die zum Zeitpunkt der Bestellung auf der Website angegebenen Preise. Alle Preise verstehen 
              sich inklusive der gesetzlichen Mehrwertsteuer.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">4.2 Abonnement-Zahlungen</h3>
            <p>
              Abonnement-Gebühren werden monatlich im Voraus fällig und automatisch vom angegebenen Zahlungsmittel 
              (Kreditkarte, Lastschrift) eingezogen.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">4.3 Einmalige Leistungen</h3>
            <p>
              Für einmalige Leistungen (z.B. Vor-Ort-Service außerhalb des Abonnements) gelten folgende Zahlungsbedingungen:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Rechnungsstellung nach Leistungserbringung</li>
              <li>Zahlungsziel: 14 Tage nach Rechnungsdatum</li>
              <li>Bei Zahlungsverzug werden Verzugszinsen in Höhe von 5 Prozentpunkten über dem Basiszinssatz berechnet</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Laufzeit und Kündigung</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">5.1 Abonnements</h3>
            <p>
              Abonnements haben eine Mindestlaufzeit von einem Monat und verlängern sich automatisch um jeweils einen 
              weiteren Monat, sofern sie nicht mit einer Frist von 7 Tagen zum Monatsende gekündigt werden.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">5.2 Kündigungsform</h3>
            <p>
              Kündigungen müssen in Textform (E-Mail ausreichend) an info@techhilfepro.de erfolgen.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">5.3 Außerordentliche Kündigung</h3>
            <p>
              Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt für beide Parteien unberührt.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Pflichten des Kunden</h2>
            <p>
              Der Kunde verpflichtet sich:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Alle für die Leistungserbringung erforderlichen Informationen wahrheitsgemäß und vollständig bereitzustellen</li>
              <li>Bei Remote-Support die notwendigen technischen Voraussetzungen (Internetverbindung, Remote-Zugriff) zu schaffen</li>
              <li>Vor Beginn von Arbeiten wichtige Daten zu sichern</li>
              <li>Zugangsdaten und Passwörter sicher zu verwahren</li>
              <li>Den Anbieter unverzüglich über Änderungen relevanter Umstände zu informieren</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Leistungserbringung</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">7.1 Remote-Support</h3>
            <p>
              Remote-Support erfolgt über sichere Verbindungen. Der Kunde muss dem Anbieter den erforderlichen Zugriff 
              auf seine Systeme gewähren.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">7.2 Vor-Ort-Service</h3>
            <p>
              Vor-Ort-Service in Köln und Neuss wird nach Terminvereinbarung erbracht. Anfahrtskosten sind im 
              Premium-Abonnement enthalten, bei Einzelleistungen werden sie separat berechnet.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">7.3 Reaktionszeiten</h3>
            <p>
              Der Anbieter bemüht sich um schnellstmögliche Reaktion. Garantierte Reaktionszeiten gelten nur für 
              Premium-Abonnenten gemäß separater Service-Level-Vereinbarung.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Gewährleistung und Haftung</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">8.1 Gewährleistung</h3>
            <p>
              Der Anbieter erbringt seine Leistungen nach bestem Wissen und Gewissen sowie nach dem aktuellen Stand 
              der Technik. Bei Mängeln hat der Kunde zunächst Anspruch auf Nachbesserung.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">8.2 Haftungsbeschränkung</h3>
            <p>
              Der Anbieter haftet unbeschränkt:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Bei Vorsatz und grober Fahrlässigkeit</li>
              <li>Bei Verletzung von Leben, Körper oder Gesundheit</li>
              <li>Nach den Vorschriften des Produkthaftungsgesetzes</li>
              <li>Im Umfang einer übernommenen Garantie</li>
            </ul>
            <p>
              Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf den 
              vertragstypischen, vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung ausgeschlossen.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">8.3 Datenverlust</h3>
            <p>
              Der Anbieter haftet nicht für Datenverlust, soweit der Schaden darauf beruht, dass es der Kunde 
              unterlassen hat, Datensicherungen durchzuführen und dadurch sicherzustellen, dass verloren gegangene 
              Daten mit vertretbarem Aufwand wiederhergestellt werden können.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Datenschutz</h2>
            <p>
              Der Anbieter verarbeitet personenbezogene Daten des Kunden ausschließlich im Rahmen der gesetzlichen 
              Bestimmungen. Einzelheiten ergeben sich aus der Datenschutzerklärung, die auf der Website einsehbar ist.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Geheimhaltung</h2>
            <p>
              Beide Parteien verpflichten sich, alle im Rahmen der Geschäftsbeziehung bekannt gewordenen vertraulichen 
              Informationen der anderen Partei geheim zu halten und nur zur Vertragserfüllung zu verwenden.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Änderungen der AGB</h2>
            <p>
              Der Anbieter behält sich vor, diese AGB mit Wirkung für die Zukunft zu ändern. Änderungen werden dem 
              Kunden mindestens 4 Wochen vor ihrem Inkrafttreten in Textform mitgeteilt. Widerspricht der Kunde nicht 
              innerhalb von 4 Wochen nach Zugang der Mitteilung, gelten die geänderten AGB als angenommen.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">12. Schlussbestimmungen</h2>
            
            <h3 className="text-xl font-bold mt-6 mb-3">12.1 Anwendbares Recht</h3>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">12.2 Gerichtsstand</h3>
            <p>
              Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist Köln, sofern der Kunde Kaufmann, 
              juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">12.3 Salvatorische Klausel</h3>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der 
              übrigen Bestimmungen hiervon unberührt.
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              Stand: Oktober 2025<br />
              Tech Hilfe Pro<br />
              José Carlos Martín Lache
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AGB
