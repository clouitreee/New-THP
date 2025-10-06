import React from 'react'
import { Helmet } from 'react-helmet-async'

const Seo = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  const defaultTitle = 'Tech Hilfe Pro - IT-Support Köln & Neuss | NIS2-konform'
  const defaultDescription =
    'Professioneller IT-Support in Köln und Neuss. NIS2-konform, Cybersicherheit, Digitalisierung für KMU und Privatkunden.'
  const defaultKeywords =
    'IT-Support Köln, NIS2 NRW, Cybersicherheit, Digitalisierung KMU, Tech Support Neuss, IT-Dienstleister Köln, IT-Service Neuss, Home Office Support, Senioren IT Hilfe'
  const defaultOgImage = 'https://techhilfe-ew9dxg.manus.space/og-image.jpg' // Placeholder, replace with actual image URL
  const defaultOgUrl = 'https://techhilfe-ew9dxg.manus.space/' // Placeholder, replace with actual base URL

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || defaultOgUrl} />
      <meta property="og:title" content={ogTitle || title || defaultTitle} />
      <meta
        property="og:description"
        content={ogDescription || description || defaultDescription}
      />
      <meta property="og:image" content={ogImage || defaultOgImage} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard || 'summary_large_image'} />
      <meta property="twitter:url" content={twitterUrl || defaultOgUrl} />
      <meta property="twitter:title" content={twitterTitle || title || defaultTitle} />
      <meta
        property="twitter:description"
        content={twitterDescription || description || defaultDescription}
      />
      <meta property="twitter:image" content={twitterImage || defaultOgImage} />
    </Helmet>
  )
}

export default Seo
