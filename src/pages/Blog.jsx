import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search, Calendar, Clock, User } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  }

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [...new Set(blogPosts.map(post => post.category))]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Tech Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aktuelle Artikel zu IT-Support, Cybersicherheit, Digitalisierung und mehr
          </p>
        </motion.div>

        {/* Search */}
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Artikel durchsuchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-2 mb-12">
          <Badge
            variant={searchTerm === '' ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSearchTerm('')}
          >
            Alle
          </Badge>
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={searchTerm === category ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setSearchTerm(category)}
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/blog/${post.id}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{post.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
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
          <motion.div {...fadeInUp} className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              Keine Artikel gefunden. Versuchen Sie einen anderen Suchbegriff.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Blog
