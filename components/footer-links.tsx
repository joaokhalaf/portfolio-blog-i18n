import { siteConfig } from '@/app/[locale]/site-config'

function FooterLinks() {
  return (
    <footer className="mt-20 pb-6 ">
      <div className="flex gap-3 text-sm justify-center text-gray-600 dark:text-slate-200">
        <a href="mailto:example@gmail.com" className="hover:text-black">MAIL</a>
        <span>/</span>
        <a href={siteConfig.links.x} className="hover:text-black">TWITTER</a>
        <span>/</span>
        <a href={siteConfig.links.linkedin} className="hover:text-black">LINKEDIN</a>
        <span>/</span>
        <a href={siteConfig.links.github} className="hover:text-black">GITHUB</a>
      </div>
    </footer>
  )
}

export default FooterLinks
