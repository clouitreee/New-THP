import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Users, Building2, Shield, Laptop, ArrowRight, CheckCircle } from 'lucide-react'

const Home = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  }

  const niches = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Seniors",
      description: "Einfache, geduldige IT-Unterstützung für Senioren mit Hausbesuchen und persönlichen Schulungen in Köln und Neuss."
    },
    {
      icon: <Laptop className="h-12 w-12 text-blue-600" />,
      title: "Home Office",
      description: "Optimierung Ihres Home-Office-Setups mit VPN, sicheren Verbindungen und professionellen Tools für produktives Arbeiten."
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: "KMU Digitalisierung",
      description: "Digitale Transformation für kleine und mittlere Unternehmen mit Förderungen wie 'Digital Jetzt' und NIS2-Compliance."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Cybersicherheit",
      description: "NIS2-konforme Sicherheitslösungen, Firewall-Setup, Virusentfernung und umfassender Schutz für Ihre digitalen Assets."
    }
  ]

  const benefits = [
    "24/7 Remote-Support für ganz Deutschland",
    "Vor-Ort-Service in Köln und Neuss",
    "NIS2-konforme Sicherheitslösungen",
    "Persönliche Beratung auf Deutsch",
    "Faire Preise mit transparenten Abonnements",
    "Erfahrung mit allen gängigen Systemen"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professioneller <span className="text-blue-600">IT-Support</span> in Köln & Neuss
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                NIS2-konforme Lösungen, Cybersicherheit und digitale Transformation für Privatkunden und KMU. Remote und vor Ort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Gratis Beratung <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Services entdecken
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0"
                  title="Tech Hilfe Pro Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Unsere Spezialisierungen</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Maßgeschneiderte IT-Lösungen für verschiedene Zielgruppen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {niches.map((niche, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mb-4">{niche.icon}</div>
                    <CardTitle>{niche.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{niche.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">Warum Tech Hilfe Pro?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Wir bieten professionelle IT-Unterstützung mit persönlichem Service, technischer Exzellenz und einem tiefen Verständnis für die Bedürfnisse unserer Kunden in NRW und ganz Deutschland.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="relative"
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Bereit für professionellen IT-Support?</h3>
                <p className="text-muted-foreground mb-6">
                  Kontaktieren Sie uns für eine kostenlose Erstberatung und erfahren Sie, wie wir Ihre IT-Infrastruktur optimieren können.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="https://wa.me/4915565029989" className="text-blue-600 hover:underline">
                        +49 155 65029989
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold">E-Mail</p>
                      <a href="mailto:info@techhilfepro.de" className="text-blue-600 hover:underline">
                        info@techhilfepro.de
                      </a>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="block mt-6">
                  <Button className="w-full" size="lg">
                    Jetzt Kontakt aufnehmen
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            {...fadeInUp}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Starten Sie noch heute!</h2>
            <p className="text-xl mb-8 opacity-90">
              Profitieren Sie von unserem Basis-Abonnement mit 14 Tagen kostenloser Testphase
            </p>
            <Link to="/services">
              <Button size="lg" variant="secondary">
                Abonnements ansehen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
