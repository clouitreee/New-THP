import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.jsx'
import { Check, Laptop, Shield, Users, Building2, Server, Cloud, Lock, Wrench } from 'lucide-react'
import Seo from '@/components/common/Seo'

const Services = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  }

  const privateServices = [
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" aria-hidden="true" />,
      title: 'Hardware-Reparaturen',
      description: 'PC, Mac, Smartphone - Reparatur und Wartung aller Geräte',
      details: [
        'Computer-Reparatur (PC & Mac)',
        'Smartphone & Tablet Reparatur',
        'Virusentfernung & Malware-Schutz',
        'Datenrettung bei Festplattenausfall',
        'Hardware-Upgrades (RAM, SSD, etc.)',
        'Systemoptimierung für bessere Performance',
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" aria-hidden="true" />,
      title: 'Cybersicherheit',
      description: 'Schutz vor digitalen Bedrohungen',
      details: [
        'Firewall-Konfiguration',
        'Antivirus-Installation & -Wartung',
        'Sichere Passwort-Verwaltung',
        'NIS2-Compliance-Check',
        'Phishing-Schutz & Awareness-Training',
        'Netzwerk-Sicherheitsanalyse',
      ],
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-600" aria-hidden="true" />,
      title: 'Home Office Optimierung',
      description: 'Produktives und sicheres Arbeiten von zu Hause',
      details: [
        'VPN-Einrichtung für sicheren Zugriff',
        'Microsoft Teams & Zoom Setup',
        'Cloud-Speicher-Integration (OneDrive, Google Drive)',
        'Drucker & Scanner Installation',
        'Ergonomische Arbeitsplatz-Beratung',
        'Backup-Lösungen für wichtige Daten',
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" aria-hidden="true" />,
      title: 'Seniors Support',
      description: 'Geduldige IT-Hilfe für Senioren',
      details: [
        'Hausbesuche in Köln & Neuss',
        'Einrichtung von Smartphones & Tablets',
        'E-Mail & Videocall-Training (Skype, WhatsApp)',
        'Online-Banking Sicherheit',
        'Einfache Schulungen in verständlicher Sprache',
        'Langfristige Betreuung & Support',
      ],
    },
  ]

  const businessServices = [
    {
      icon: <Server className="h-8 w-8 text-blue-600" aria-hidden="true" />,
      title: 'Managed IT Services',
      description: 'Rundum-Betreuung für Ihre IT-Infrastruktur',
      details: [
        '24/7 Netzwerk-Überwachung',
        'Proaktive Wartung & Updates',
        'Server-Administration (Windows/Linux)',
        'Cloud-Migration & -Management',
        'IT-Sicherheits-Audits',
        'Disaster Recovery Planning',
      ],
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" aria-hidden="true" />,
      title: 'NIS2-Compliance',
      description: 'EU-konforme Sicherheitsstandards für KMU',
      details: [
        'NIS2-Compliance-Audits',
        'Risikobewertung & -management',
        'Incident Response Planning',
        'Dokumentation & Berichterstattung',
        'Mitarbeiter-Schulungen zu Cybersicherheit',
        'Kontinuierliche Compliance-Überwachung',
      ],
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-600" aria-hidden="true" />,
      title: 'Digitalisierung & Förderungen',
      description: 'Digitale Transformation mit staatlicher Unterstützung',
      details: [
        'Beratung zu Förderprogrammen (Digital Jetzt, NRW.BANK)',
        'ERP & CRM System-Implementierung',
        'Prozessautomatisierung',
        'Digitale Dokumentenverwaltung',
        'E-Commerce-Lösungen',
        'Unterstützung bei Förderanträgen',
      ],
    },
    {
      icon: <Cloud className="h-8 w-8 text-blue-600" aria-hidden="true" />,
      title: 'Cloud-Lösungen',
      description: 'Flexible und skalierbare Cloud-Infrastruktur',
      details: [
        'Microsoft 365 & Google Workspace Setup',
        'Cloud-Backup-Lösungen',
        'Hybrid-Cloud-Architekturen',
        'Cloud-Sicherheit & Compliance',
        'Kostenoptimierung',
        'Migration von On-Premise zu Cloud',
      ],
    },
  ]

  const subscriptionPlans = [
    {
      name: 'Basis',
      price: '9,90',
      period: 'Monat',
      description: 'Perfekt für Privatkunden und kleine Büros',
      features: [
        '24/7 Remote-Support',
        'Unbegrenzter E-Mail & Chat Support',
        'Automatische Backups',
        'NIS2-Basis-Check',
        'Monatliche Sicherheitsupdates',
        'Zugang zu Online-Tutorials',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '24,90',
      period: 'Monat',
      description: 'Für Unternehmen mit erweiterten Anforderungen',
      features: [
        'Alle Basis-Features',
        'Prioritäts-Support vor Ort (Köln/Neuss)',
        'NIS2-Compliance-Audits',
        'Quartalsweise Sicherheitsanalysen',
        'Kostenlose Webinare & Schulungen',
        'Dedizierter Account Manager',
        'Erweiterte Backup-Lösungen',
        'Incident Response Service',
      ],
      popular: true,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <Seo
        title="Unsere Services - Tech Hilfe Pro"
        description="Umfassende IT-Lösungen für Privatkunden und Unternehmen in Köln, Neuss und ganz Deutschland. Hardware-Reparaturen, Cybersicherheit, Home Office Optimierung, NIS2-Compliance und mehr."
        keywords="IT-Services Köln, IT-Support Neuss, Hardware Reparatur, Cybersicherheit KMU, NIS2 Compliance, Home Office IT, Managed IT Services, Cloud Lösungen"
        ogUrl="https://techhilfe-ew9dxg.manus.space/services"
        ogImage="https://techhilfe-ew9dxg.manus.space/og-image-services.jpg" // Placeholder, replace with actual image URL
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold">Unsere Services</h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Umfassende IT-Lösungen für Privatkunden und Unternehmen in Köln, Neuss und ganz
            Deutschland
          </p>
        </motion.div>

        {/* Private Services */}
        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Services für Privatkunden</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {privateServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4" role="img" aria-label={service.title + ' Icon'}>
                      {service.icon}
                    </div>
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
                                <Check
                                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                                  aria-hidden="true"
                                />
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
          <h2 className="mb-8 text-3xl font-bold">Services für KMU</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {businessServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4" role="img" aria-label={service.title + ' Icon'}>
                      {service.icon}
                    </div>
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
                                <Check
                                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                                  aria-hidden="true"
                                />
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
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Abonnement-Pläne</h2>
            <p className="text-muted-foreground text-xl">
              Wählen Sie den passenden Plan für Ihre Bedürfnisse - 14 Tage kostenlos testen
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full ${plan.popular ? 'border-2 border-blue-600 shadow-xl' : ''}`}
                >
                  {plan.popular && (
                    <div className="rounded-t-lg bg-blue-600 py-2 text-center font-semibold text-white">
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
                    <ul className="mb-6 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check
                            className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
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
          <Card className="bg-gradient-to-r from-blue-50 to-gray-50 p-8 dark:from-gray-800 dark:to-gray-900">
            <h3 className="mb-4 text-3xl font-bold">Benötigen Sie eine individuelle Lösung?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Kontaktieren Sie uns für ein maßgeschneidertes Angebot, das perfekt zu Ihren
              Anforderungen passt.
            </p>
            <Button size="lg">Jetzt Beratungsgespräch vereinbaren</Button>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
