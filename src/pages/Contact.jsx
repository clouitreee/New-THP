import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import Seo from '@/components/common/Seo'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" aria-hidden="true" />,
      title: 'Telefon & WhatsApp',
      content: '+49 155 65029989',
      link: 'https://wa.me/4915565029989',
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" aria-hidden="true" />,
      title: 'E-Mail',
      content: 'info@techhilfepro.de',
      link: 'mailto:info@techhilfepro.de',
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" aria-hidden="true" />,
      title: 'Standort',
      content: 'Köln & Neuss, NRW',
      link: null,
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" aria-hidden="true" />,
      title: 'Verfügbarkeit',
      content: '24/7 Remote-Support',
      link: null,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <Seo
        title="Kontakt - Tech Hilfe Pro"
        description="Kontaktieren Sie Tech Hilfe Pro für professionellen IT-Support in Köln und Neuss. Senden Sie uns eine Nachricht, rufen Sie uns an oder schreiben Sie uns per WhatsApp."
        keywords="Kontakt IT-Support, Tech Hilfe Pro Kontakt, IT-Dienstleister Köln, IT-Service Neuss, WhatsApp IT-Support, E-Mail IT-Hilfe"
        ogUrl="https://techhilfe-ew9dxg.manus.space/contact"
        ogImage="https://techhilfe-ew9dxg.manus.space/og-image-contact.jpg" // Placeholder, replace with actual image URL
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold">Kontaktieren Sie uns</h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Wir sind für Sie da - remote und vor Ort in Köln und Neuss
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div {...fadeInUp}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Senden Sie uns eine Nachricht</CardTitle>
                <CardDescription>
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                      <MessageSquare className="h-8 w-8 text-green-600" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Vielen Dank!</h3>
                    <p className="text-muted-foreground">
                      Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ihr vollständiger Name"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ihre.email@beispiel.de"
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Telefon (optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+49 123 456789"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium">
                        Nachricht <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                        rows={6}
                        aria-required="true"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Nachricht senden
                    </Button>

                    <p className="text-muted-foreground text-center text-xs">
                      Mit dem Absenden stimmen Sie unserer{' '}
                      <a href="/datenschutz" className="hover:text-primary underline">
                        Datenschutzerklärung
                      </a>{' '}
                      zu.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4" role="img" aria-label={info.title + ' Icon'}>
                          {info.icon}
                        </div>
                        <h3 className="mb-2 font-semibold">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary text-sm transition-colors"
                            aria-label={info.title + ': ' + info.content}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.content}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Unser Servicegebiet</CardTitle>
                  <CardDescription>
                    Vor-Ort-Service in Köln und Neuss, Remote-Support für ganz Deutschland
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161519.7654841!2d6.7732!3d51.0504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf259169ab2fe5%3A0x42760fc4a2a77f0!2sK%C3%B6ln!5e0!3m2!1sde!2sde!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Karte von Köln und Neuss"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div {...fadeInUp}>
              <Card className="border-green-200 bg-gradient-to-r from-green-50 to-blue-50 dark:border-green-800 dark:from-green-900/20 dark:to-blue-900/20">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                      <MessageSquare className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg font-bold">Schnelle Hilfe per WhatsApp</h3>
                      <p className="text-muted-foreground mb-3 text-sm">
                        Kontaktieren Sie uns direkt für sofortige Unterstützung
                      </p>
                      <a
                        href="https://wa.me/4915565029989"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Chat öffnen"
                      >
                        <Button variant="default" className="bg-green-600 hover:bg-green-700">
                          WhatsApp öffnen
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
