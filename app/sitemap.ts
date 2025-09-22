import { routing } from "@/i18n/routing"
import { MetadataRoute } from "next"
import { Locale } from "next-intl"

export const baseUrl = 'http://localhost:3000/'

export default function sitemap() {
  const staticRoutes: MetadataRoute.Sitemap = []

  routing.locales.forEach((locale: Locale) => {
    const localePrefix = locale === routing.defaultLocale ? '' : `/${locale}`

    staticRoutes.push({
      url: `${baseUrl}${localePrefix}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })

    const writingPath = (routing.pathnames['/writing'] as Record<Locale, string>)[locale]
    staticRoutes.push({
      url: `${baseUrl}${localePrefix}${writingPath}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    const worksPath = (routing.pathnames['/works'] as Record<Locale, string>)[locale]
    staticRoutes.push({
      url: `${baseUrl}${localePrefix}${worksPath}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })

    const aboutPath = (routing.pathnames['/about'] as Record<Locale, string>)[locale]
    staticRoutes.push({
      url: `${baseUrl}${localePrefix}${aboutPath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })

    const collegePath = (routing.pathnames['/college'] as Record<Locale, string>)[locale]
    staticRoutes.push({
      url: `${baseUrl}${localePrefix}${collegePath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  })

  return [...staticRoutes]
}
