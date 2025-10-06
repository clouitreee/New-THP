import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'

const FAQ = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  }

  const faqs = [
    {
      category: "Allgemein",
      questions: [
        {
          question: "Was ist Tech Hilfe Pro?",
          answer: "Tech Hilfe Pro ist ein professioneller IT-Support-Dienstleister mit Sitz in Köln und Neuss. Wir bieten umfassende IT-Unterstützung für Privatkunden und kleine bis mittlere Unternehmen (KMU) in NRW und ganz Deutschland - sowohl remote als auch vor Ort."
        },
        {
          question: "Welche Gebiete deckt Ihr ab?",
          answer: "Wir bieten Vor-Ort-Service in Köln und Neuss sowie Remote-Support für ganz Deutschland. Für dringende Fälle außerhalb unseres Hauptgebiets können wir nach Absprache auch weitere Regionen in NRW bedienen."
        },
        {
          question: "Wie schnell könnt Ihr helfen?",
          answer: "Remote-Support bieten wir in der Regel innerhalb weniger Stunden an. Für Vor-Ort-Termine in Köln und Neuss bemühen wir uns um Termine innerhalb von 24-48 Stunden. Premium-Abonnenten erhalten Prioritäts-Service mit garantierten Reaktionszeiten."
        }
      ]
    },
    {
      category: "Abonnements",
      questions: [
        {
          question: "Was ist im Basis-Abonnement enthalten?",
          answer: "Das Basis-Abonnement (9,90 €/Monat) umfasst: 24/7 Remote-Support, unbegrenzten E-Mail & Chat Support, automatische Backups, NIS2-Basis-Check, monatliche Sicherheitsupdates und Zugang zu Online-Tutorials."
        },
        {
          question: "Was bietet das Premium-Abonnement zusätzlich?",
          answer: "Das Premium-Abonnement (24,90 €/Monat) enthält alle Basis-Features plus: Prioritäts-Support vor Ort in Köln/Neuss, NIS2-Compliance-Audits, quartalsweise Sicherheitsanalysen, kostenlose Webinare & Schulungen, dedizierter Account Manager, erweiterte Backup-Lösungen und Incident Response Service."
        },
        {
          question: "Gibt es eine Testphase?",
          answer: "Ja! Alle neuen Abonnenten erhalten eine 14-tägige kostenlose Testphase. Während dieser Zeit können Sie das Abonnement jederzeit ohne Angabe von Gründen kündigen."
        },
        {
          question: "Wie kann ich mein Abonnement kündigen?",
          answer: "Abonnements können mit einer Frist von 7 Tagen zum Monatsende gekündigt werden. Die Kündigung erfolgt einfach per E-Mail an info@techhilfepro.de."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "Was bedeutet Remote-Support?",
          answer: "Remote-Support bedeutet, dass wir uns über eine sichere Internetverbindung mit Ihrem Computer verbinden und Probleme direkt beheben können, ohne vor Ort sein zu müssen. Dies ist oft schneller und kostengünstiger als Vor-Ort-Service."
        },
        {
          question: "Bietet Ihr auch Schulungen an?",
          answer: "Ja! Wir bieten individuelle Schulungen für Einzelpersonen und Gruppen an. Besonders beliebt sind unsere Schulungen für Senioren und Mitarbeiter-Trainings zu Cybersecurity-Themen. Premium-Abonnenten erhalten Zugang zu kostenlosen Webinaren."
        },
        {
          question: "Könnt Ihr auch bei Hardware-Problemen helfen?",
          answer: "Absolut! Wir reparieren und warten alle gängigen Geräte: PCs, Macs, Laptops, Smartphones und Tablets. Bei Vor-Ort-Terminen bringen wir oft Ersatzteile mit, um Probleme sofort zu lösen."
        },
        {
          question: "Was ist ein NIS2-Compliance-Audit?",
          answer: "NIS2 ist eine EU-Richtlinie zur Cybersicherheit, die viele Unternehmen betrifft. Unser Audit prüft, ob Ihr Unternehmen die Anforderungen erfüllt, identifiziert Lücken und gibt konkrete Handlungsempfehlungen."
        }
      ]
    },
    {
      category: "Sicherheit & Datenschutz",
      questions: [
        {
          question: "Wie sicher ist Remote-Support?",
          answer: "Wir verwenden ausschließlich verschlüsselte Verbindungen für Remote-Support. Sie behalten jederzeit die Kontrolle und können die Verbindung sofort beenden. Wir greifen nur auf Bereiche zu, die für die Problemlösung notwendig sind."
        },
        {
          question: "Was passiert mit meinen Daten?",
          answer: "Wir behandeln Ihre Daten streng vertraulich und gemäß DSGVO. Daten werden nur zur Leistungserbringung verwendet und nicht an Dritte weitergegeben. Details finden Sie in unserer Datenschutzerklärung."
        },
        {
          question: "Sind meine Passwörter sicher?",
          answer: "Wir fragen niemals nach Ihren Passwörtern per E-Mail oder Telefon. Bei notwendigem Zugriff erfolgt dies immer unter Ihrer Aufsicht oder Sie ändern das Passwort temporär. Wir empfehlen die Nutzung eines Passwort-Managers."
        }
      ]
    },
    {
      category: "Preise & Zahlung",
      questions: [
        {
          question: "Wie werden Abonnements bezahlt?",
          answer: "Abonnement-Gebühren werden monatlich im Voraus automatisch per Kreditkarte oder Lastschrift eingezogen. Sie erhalten vor jeder Abbuchung eine Rechnung per E-Mail."
        },
        {
          question: "Was kosten einmalige Services?",
          answer: "Die Preise für einmalige Services variieren je nach Aufwand. Remote-Support wird stundenweise berechnet (ab 49 €/Stunde), Vor-Ort-Service inklusive Anfahrt ab 89 €. Wir erstellen vorab einen Kostenvoranschlag."
        },
        {
          question: "Gibt es versteckte Kosten?",
          answer: "Nein! Alle Preise sind transparent. Bei Abonnements sind alle genannten Leistungen enthalten. Zusätzliche Kosten entstehen nur bei Leistungen außerhalb des Abonnements und werden vorab kommuniziert."
        }
      ]
    },
    {
      category: "Technisches",
      questions: [
        {
          question: "Welche Systeme unterstützt Ihr?",
          answer: "Wir unterstützen alle gängigen Betriebssysteme: Windows (alle Versionen), macOS, Linux, iOS und Android. Auch mit speziellen Systemen haben wir Erfahrung."
        },
        {
          question: "Benötige ich spezielle Software für Remote-Support?",
          answer: "Für Remote-Support verwenden wir gängige Tools wie TeamViewer oder AnyDesk. Diese können Sie kostenlos herunterladen oder wir senden Ihnen einen Link für eine einmalige Sitzung ohne Installation."
        },
        {
          question: "Was passiert, wenn mein Problem nicht gelöst werden kann?",
          answer: "In den seltenen Fällen, in denen wir ein Problem nicht lösen können, berechnen wir nichts (außer bei Abonnements, die ohnehin laufen). Wir helfen Ihnen, einen Spezialisten zu finden oder alternative Lösungen zu entwickeln."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Häufig gestellte Fragen (FAQ)</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Services
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ihre Frage ist nicht dabei?</h3>
              <p className="text-muted-foreground mb-6">
                Kontaktieren Sie uns gerne direkt - wir helfen Ihnen weiter!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Kontakt aufnehmen
                  </button>
                </a>
                <a href="https://wa.me/4915565029989" target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    WhatsApp Chat
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
