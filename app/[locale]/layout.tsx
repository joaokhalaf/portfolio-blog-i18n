import { CursorEffect } from '@/components/cursor-effect'
import FooterLinks from '@/components/footer-links'
import NavLinks from '@/components/navbar-links'
import { ThemeProvider } from '@/components/theme-provider'
import { Locale, routing } from "@/i18n/routing"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { JetBrains_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import './globals.css'
import { siteConfig } from './site-config'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: `${siteConfig.name}`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default async function RootLayout({ children, params,}: Props) {
  const { locale } = await Promise.resolve(params);
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning className={`${jetbrainsMono.className} antialiased min-h-screen bg-background text-foreground`}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <CursorEffect />
          <div className="max-w-2xl mx-auto px-4 py-14">
            <NextIntlClientProvider messages={messages}>
              <NavLinks />
              {children}
              <FooterLinks />
            </NextIntlClientProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
