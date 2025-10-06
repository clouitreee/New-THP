import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.jsx'
import { Check, Laptop, Shield, Users, Building2, Server, Cloud, Lock, Wrench } from 'lucide-react'

const Services = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  }

  const privateServices = [
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Hardware-Reparaturen",
      description: "PC, Mac, Smartphone - Reparatur und Wartung aller Geräte",
      details: [
        "Computer-Reparatur (PC & Mac)",
        "Smartphone & Tablet Reparatur",
        "Virusentfernung & Malware-Schutz",
        "Datenrettung bei Festplattenausfall",
        "Hardware-Upgrades (RAM, SSD, etc.)",
        "Systemoptimierung für bessere Performance"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Cybersicherheit",
      description: "Schutz vor digitalen Bedrohungen",
      details: [
        "Firewall-Konfiguration",
        "Antivirus-Installation & -Wartung",
        "Sichere Passwort-Verwaltung",
        "NIS2-Compliance-Check",
        "Phishing-Schutz & Awareness-Training",
        "Netzwerk-Sicherheitsanalyse"
      ]
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-600" />,
      title: "Home Office Optimierung",
      description: "Produktives und sicheres Arbeiten von zu Hause",
      details: [
        "VPN-Einrichtung für sicheren Zugriff",
        "Microsoft Teams & Zoom Setup",
        "Cloud-Speicher-Integration (OneDrive, Google Drive)",
        "Drucker & Scanner Installation",
        "Ergonomische Arbeitsplatz-Beratung",
        "Backup-Lösungen für wichtige Daten"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Seniors Support",
      description: "Geduldige IT-Hilfe für Senioren",
      details: [
        "Hausbesuche in Köln & Neuss",
        "Einrichtung von Smartphones & Tablets",
        "E-Mail & Videocall-Training (Skype, WhatsApp)",
        "Online-Banking Sicherheit",
        "Einfache Schulungen in verständlicher Sprache",
        "Langfristige Betreuung & Support"
      ]
    }
  ]

  const businessServices = [
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Managed IT Services",
      description: "Rundum-Betreuung für Ihre IT-Infrastruktur",
      details: [
        "24/7 Netzwerk-Überwachung",
        "Proaktive Wartung & Updates",
        "Server-Administration (Windows/Linux)",
        "Cloud-Migration & -Management",
        "IT-Sicherheits-Audits",
        "Disaster Recovery Planning"
      ]
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "NIS2-Compliance",
      description: "EU-konforme Sicherheitsstandards für KMU",
      details: [
        "NIS2-Compliance-Audits",
        "Risikobewertung & -management",
        "Incident Response Planning",
        "Dokumentation & Berichterstattung",
        "Mitarbeiter-Schulungen zu Cybersicherheit",
        "Kontinuierliche Compliance-Überwachung"
      ]
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      title: "Digitalisierung & Förderungen",
      description: "Digitale Transformation mit staatlicher Unterstützung",
      details: [
        "Beratung zu Förderprogrammen (Digital Jetzt, NRW.BANK)",
        "ERP & CRM System-Implementierung",
        "Prozessautomatisierung",
        "Digitale Dokumentenverwaltung",
        "E-Commerce-Lösungen",
        "Unterstützung bei Förderanträgen"
      ]
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" />,
      title: "Cloud-Lösungen",
      description: "Flexible und skalierbare Cloud-Infrastruktur",
      details: [
        "Microsoft 365 & Google Workspace Setup",
        "Cloud-Backup-Lösungen",
        "Hybrid-Cloud-Architekturen",
        "Cloud-Sicherheit & Compliance",
        "Kostenoptimierung",
        "Migration von On-Premise zu Cloud"
      ]
    }
  ]

  const subscriptionPlans = [
    {
      name: "Basis",
      price: "9,90",
      period: "Monat",
      description: "Perfekt für Privatkunden und kleine Büros",
      features: [
        "24/7 Remote-Support",
        "Unbegrenzter E-Mail & Chat Support",
        "Automatische Backups",
        "NIS2-Basis-Check",
        "Monatliche Sicherheitsupdates",
        "Zugang zu Online-Tutorials"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "24,90",
      period: "Monat",
      description: "Für Unternehmen mit erweiterten Anforderungen",
      features: [
        "Alle Basis-Features",
        "Prioritäts-Support vor Ort (Köln/Neuss)",
        "NIS2-Compliance-Audits",
        "Quartalsweise Sicherheitsanalysen",
        "Kostenlose Webinare & Schulungen",
        "Dedizierter Account Manager",
        "Erweiterte Backup-Lösungen",
        "Incident Response Service"
      ],
      popular: true
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Unsere Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Umfassende IT-Lösungen für Privatkunden und Unternehmen in Köln, Neuss und ganz Deutschland
          </p>
        </motion.div>

        {/* Private Services */}
        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Services für Privatkunden</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privateServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="details">
                        <AccordionTrigger>Details anzeigen</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Services */}
        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Services für KMU</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="details">
                        <AccordionTrigger>Details anzeigen</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subscription Plans */}
        <motion.div {...fadeInUp} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Abonnement-Pläne</h2>
            <p className="text-xl text-muted-foreground">
              Wählen Sie den passenden Plan für Ihre Bedürfnisse - 14 Tage kostenlos testen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${plan.popular ? 'border-blue-600 border-2 shadow-xl' : ''}`}>
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-center py-2 rounded-t-lg font-semibold">
                      Beliebteste Wahl
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-5xl font-bold">{plan.price}€</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      14 Tage kostenlos testen
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="text-center">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <h3 className="text-3xl font-bold mb-4">Benötigen Sie eine individuelle Lösung?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Kontaktieren Sie uns für ein maßgeschneidertes Angebot, das perfekt zu Ihren Anforderungen passt.
            </p>
            <Button size="lg">
              Jetzt Beratungsgespräch vereinbaren
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
