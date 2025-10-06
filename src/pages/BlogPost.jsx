import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import Seo from '@/components/common/Seo'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const BlogPost = () => {
  const { id } = useParams()
  const post = blogPosts.find((p) => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">Artikel nicht gefunden</h1>
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
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen py-20">
      <Seo
        title={post.title + ' - Tech Blog | Tech Hilfe Pro'}
        description={post.excerpt}
        keywords={`${post.category}, ${post.title}, Tech Hilfe Pro Blog, IT-Support, Cybersicherheit`}
        ogUrl={`https://techhilfe-ew9dxg.manus.space/blog/${post.id}`}
        ogImage={post.imageUrl || 'https://techhilfe-ew9dxg.manus.space/og-image-blog-post.jpg'} // Placeholder, replace with actual image URL or use post.image
      />
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="mx-auto max-w-4xl">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Zurück zum Blog
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{post.title}</h1>
            <p className="text-muted-foreground mb-6 text-xl">{post.excerpt}</p>

            <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" aria-hidden="true" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                {new Date(post.date).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" aria-hidden="true" />
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
              <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={post.videoUrl}
                  title={post.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-16 rounded-lg bg-gradient-to-r from-blue-50 to-gray-50 p-8 dark:from-gray-800 dark:to-gray-900"
          >
            <h3 className="mb-4 text-2xl font-bold">Benötigen Sie Unterstützung?</h3>
            <p className="text-muted-foreground mb-6">
              Kontaktieren Sie uns für eine kostenlose Beratung und erfahren Sie, wie wir Ihnen
              helfen können.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/contact">
                <Button size="lg">Jetzt Kontakt aufnehmen</Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Unsere Services
                </Button>
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
            <h3 className="mb-6 text-2xl font-bold">Weitere Artikel</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                    <div className="border-border rounded-lg border p-6 transition-shadow hover:shadow-lg">
                      <Badge className="mb-2">{relatedPost.category}</Badge>
                      <h4 className="mb-2 text-lg font-bold transition-colors hover:text-blue-600">
                        {relatedPost.title}
                      </h4>
                      <p className="text-muted-foreground line-clamp-2 text-sm">
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
