import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Award, Users, Target, Heart, Shield, Zap } from 'lucide-react'
import Seo from '@/components/common/Seo'

const About = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  }

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" aria-hidden="true" />,
      title: 'Sicherheit & Vertrauen',
      description:
        'Ihre Daten und Systeme sind bei uns in sicheren Händen. NIS2-konforme Lösungen und höchste Sicherheitsstandards.',
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" aria-hidden="true" />,
      title: 'Persönlicher Service',
      description:
        'Wir nehmen uns Zeit für Sie und Ihre Anliegen. Geduldige Beratung auf Deutsch, zugeschnitten auf Ihre Bedürfnisse.',
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" aria-hidden="true" />,
      title: 'Schnelle Lösungen',
      description:
        'Minimale Ausfallzeiten durch schnelle Reaktion und effiziente Problemlösung. 24/7 Remote-Support verfügbar.',
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" aria-hidden="true" />,
      title: 'Qualität & Expertise',
      description:
        'Jahrelange Erfahrung mit allen gängigen Systemen und kontinuierliche Weiterbildung in neuesten Technologien.',
    },
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Gründung',
      description:
        'Tech Hilfe Pro wird gegründet mit dem Ziel, professionellen IT-Support für Privatkunden und KMU in NRW anzubieten.',
    },
    {
      year: '2021',
      title: 'Expansion',
      description:
        'Erweiterung des Servicegebiets auf ganz Deutschland mit Remote-Support und Spezialisierung auf Cybersicherheit.',
    },
    {
      year: '2023',
      title: 'NIS2-Expertise',
      description:
        'Zertifizierung und Spezialisierung auf NIS2-Compliance-Beratung für kleine und mittlere Unternehmen.',
    },
    {
      year: '2025',
      title: 'KI-Integration',
      description:
        'Integration von KI-gestützten Support-Lösungen für noch schnelleren und effizienteren Service.',
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <Seo
        title="Über uns - Tech Hilfe Pro"
        description="Erfahren Sie mehr über Tech Hilfe Pro, unsere Mission, Werte und Geschichte. Ihr vertrauensvoller Partner für IT-Support in Köln, Neuss und ganz Deutschland."
        keywords="Über uns Tech Hilfe Pro, IT-Support Unternehmen, IT-Dienstleister Geschichte, José Carlos Martín Lache, IT-Werte, IT-Mission"
        ogUrl="https://techhilfe-ew9dxg.manus.space/about"
        ogImage="https://techhilfe-ew9dxg.manus.space/og-image-about.jpg" // Placeholder, replace with actual image URL
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold">Über Tech Hilfe Pro</h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Ihr vertrauensvoller Partner für IT-Support in Köln, Neuss und ganz Deutschland
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div {...fadeInUp} className="mx-auto mb-20 max-w-4xl">
          <Card className="bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start space-x-4">
                <Target className="mt-1 h-12 w-12 flex-shrink-0 text-blue-600" aria-hidden="true" />
                <div>
                  <h2 className="mb-4 text-3xl font-bold">Unsere Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Bei Tech Hilfe Pro glauben wir, dass professioneller IT-Support für jeden
                    zugänglich sein sollte. Wir machen Technologie verständlich und sicher - ob für
                    Senioren, die ihre ersten Schritte im digitalen Zeitalter machen, oder für
                    Unternehmen, die ihre IT-Infrastruktur modernisieren möchten. Unser Ziel ist es,
                    Ihnen die Sicherheit zu geben, dass Ihre Technologie funktioniert, wenn Sie sie
                    brauchen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Founder Section */}
        <motion.div {...fadeInUp} className="mx-auto mb-20 max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <div
                className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800"
                role="img"
                aria-label="Gründer Icon"
              >
                <Users className="h-24 w-24 text-white" aria-hidden="true" />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="mb-4 text-3xl font-bold">José Carlos Martín Lache</h2>
              <p className="text-muted-foreground mb-4 text-lg">Gründer & Geschäftsführer</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Mit über 10 Jahren Erfahrung in der IT-Branche habe ich Tech Hilfe Pro gegründet, um
                professionellen und persönlichen IT-Support anzubieten. Meine Leidenschaft ist es,
                komplexe technische Probleme in einfache Lösungen zu verwandeln und Menschen dabei
                zu helfen, Technologie selbstbewusst zu nutzen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Besonders am Herzen liegt mir die Unterstützung von Senioren und kleinen
                Unternehmen, die oft von großen IT-Dienstleistern übersehen werden. Bei Tech Hilfe
                Pro nehmen wir uns die Zeit, die Sie brauchen, und sprechen Ihre Sprache - ohne
                Fachjargon, mit Geduld und Verständnis.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div {...fadeInUp} className="mb-20">
          <h2 className="mb-12 text-center text-4xl font-bold">Unsere Werte</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4" role="img" aria-label={value.title + ' Icon'}>
                      {value.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div {...fadeInUp} className="mx-auto mb-20 max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Unsere Geschichte</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600"
                    role="img"
                    aria-label={`Jahr ${item.year}`}
                  >
                    <span className="text-lg font-bold text-white">{item.year}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div {...fadeInUp} className="mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardContent className="p-8 md:p-12">
              <h2 className="mb-4 text-3xl font-bold">Unsere Vision für die Zukunft</h2>
              <p className="mb-6 text-lg leading-relaxed opacity-90">
                Wir arbeiten kontinuierlich daran, unsere Services zu verbessern und neue
                Technologien zu integrieren. In naher Zukunft werden wir KI-gestützte
                Support-Lösungen einführen, die noch schnellere und effizientere Hilfe ermöglichen -
                ohne dabei den persönlichen Touch zu verlieren, der uns auszeichnet.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Unser Ziel ist es, der führende IT-Support-Anbieter in NRW zu werden, der für
                Qualität, Zuverlässigkeit und persönlichen Service bekannt ist. Wir möchten, dass
                jeder Kunde - ob Privatperson oder Unternehmen - sich darauf verlassen kann, dass
                seine Technologie funktioniert und seine Daten sicher sind.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default About
