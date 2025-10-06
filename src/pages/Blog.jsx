import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search, Calendar, Clock, User } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import Seo from '@/components/common/Seo'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  }

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [...new Set(blogPosts.map((post) => post.category))]

  return (
    <div className="min-h-screen py-20">
      <Seo
        title="Tech Blog - Aktuelle Artikel zu IT-Support & Cybersicherheit"
        description="Lesen Sie aktuelle Artikel und Neuigkeiten zu IT-Support, Cybersicherheit, Digitalisierung, Home Office Optimierung und mehr von Tech Hilfe Pro."
        keywords="IT Blog, Cybersicherheit Artikel, Digitalisierung News, Home Office Tipps, IT-Support Wissen, Tech Hilfe Pro Blog"
        ogUrl="https://techhilfe-ew9dxg.manus.space/blog"
        ogImage="https://techhilfe-ew9dxg.manus.space/og-image-blog.jpg" // Placeholder, replace with actual image URL
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeInUp} className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold">Tech Blog</h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Aktuelle Artikel zu IT-Support, Cybersicherheit, Digitalisierung und mehr
          </p>
        </motion.div>

        {/* Search */}
        <motion.div {...fadeInUp} className="mx-auto mb-12 max-w-2xl">
          <div className="relative">
            <Search
              className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform"
              aria-hidden="true"
            />
            <Input
              type="text"
              placeholder="Artikel durchsuchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12 pl-10"
              aria-label="Artikel durchsuchen"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div {...fadeInUp} className="mb-12 flex flex-wrap justify-center gap-2">
          <Badge
            variant={searchTerm === '' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSearchTerm('')}
            aria-label="Alle Kategorien anzeigen"
          >
            Alle
          </Badge>
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={searchTerm === category ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSearchTerm(category)}
              aria-label={`Artikel in Kategorie ${category} anzeigen`}
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/blog/${post.id}`}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge>{post.category}</Badge>
                      <span className="text-muted-foreground flex items-center text-sm">
                        <Clock className="mr-1 h-4 w-4" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl transition-colors hover:text-blue-600">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" aria-hidden="true" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" aria-hidden="true" />
                        {new Date(post.date).toLocaleDateString('de-DE')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.div {...fadeInUp} className="py-20 text-center">
            <p className="text-muted-foreground text-xl">
              Keine Artikel gefunden. Versuchen Sie einen anderen Suchbegriff.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Blog
