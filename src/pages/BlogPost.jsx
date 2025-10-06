import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

const BlogPost = () => {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel nicht gefunden</h1>
          <Link to="/blog">
            <Button>Zurück zum Blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Blog
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('de-DE', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime} Lesezeit
              </div>
            </div>
          </div>

          {/* Video */}
          {post.videoUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={post.videoUrl}
                  title={post.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    // Headers
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-3xl font-bold mt-12 mb-4">${line.substring(3)}</h2>`
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-2xl font-bold mt-8 mb-3">${line.substring(4)}</h3>`
                    }
                    if (line.startsWith('#### ')) {
                      return `<h4 class="text-xl font-bold mt-6 mb-2">${line.substring(5)}</h4>`
                    }
                    // Bold text
                    line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    // Paragraphs
                    if (line.trim() === '') {
                      return '<br/>'
                    }
                    if (line.startsWith('- ')) {
                      return `<li class="ml-4">${line.substring(2)}</li>`
                    }
                    if (!line.startsWith('<')) {
                      return `<p class="mb-4">${line}</p>`
                    }
                    return line
                  })
                  .join('\n')
              }}
            />
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Benötigen Sie Unterstützung?</h3>
            <p className="text-muted-foreground mb-6">
              Kontaktieren Sie uns für eine kostenlose Beratung und erfahren Sie, wie wir Ihnen helfen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg">Jetzt Kontakt aufnehmen</Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">Unsere Services</Button>
              </Link>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-6">Weitere Artikel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                    <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                      <Badge className="mb-2">{relatedPost.category}</Badge>
                      <h4 className="text-lg font-bold mb-2 hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogPost
