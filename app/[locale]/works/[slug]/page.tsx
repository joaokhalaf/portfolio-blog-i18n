import { projects } from '@/app/[locale]/data/projects';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

type Params = {
  locale: string;
  slug: string;
};

export async function generateStaticParams() {
  const locales = ['en', 'pt'];
  const paths = [];

  for (const locale of locales) {
    const localePaths = projects.map((project) => ({
      locale,
      slug: project.slug,
    }));
    paths.push(...localePaths);
  }

  return paths;
}

interface ProjectDetailProps {
  params: Promise<Params>;
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const t = await getTranslations('Project');
  const tproject = await getTranslations(`Projects.${project.slug}`);

  // Definição dos itens de navegação
  const navItems = [
    { label: t('overview'), targetId: 'overview' },
    { label: t('highlights'), targetId: 'highlights' },
    {label : t('video'), targetId: 'video'},
    { label: t('contribution'), targetId: 'contribution' },
    { label: t('techStack'), targetId: 'tech-stack' },

  ];

  return (
    <div className="relative flex">
      <main className="px-6 dark:text-slate-100 w-full">
        <nav className="flex items-start gap-4 mb-10 text-sm">
          <Link href="/" className="flex items-center gap-2 hover:text-gray-600">
            <ArrowLeft size={16} />
            {t('back')}
          </Link>
        </nav>

        <article className="space-y-16">
          <header className="space-y-8 text-start">
          <h1 className="text-4xl font-normal">{tproject('title') || project.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl dark:text-slate-300">{tproject('description') || project.description}</p>

            <div className="space-y-2">
              <div className="flex items-start  justify-start gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{project.role}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-1 rounded-xl">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <section id="overview" className="pt-4">
            <h2 className="text-sm font-mono text-gray-400 mb-4">
              {t('overview')}
            </h2>
          </section>

          <section id="highlights" className="pt-4">
            <h2 className="text-sm font-mono text-gray-400 mb-4">
              {t('highlights')}
            </h2>
            <ul className="space-y-4">
              {project.highlights.map((highlight, i) => {
                const translatedHighlight = tproject(`highlights_${i}`);
                return (
                  <li key={i} className="flex gap-4">
                    <span className="text-slate-500 dark:text-slate-400">→</span>
                    <span className="text-gray-600 dark:text-slate-300">
                      {translatedHighlight || highlight}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

           {project.video && (
            <section id="video" className="pt-4">
              <h2 className="text-sm font-mono text-gray-400 mb-4">
                {t('video')}
              </h2>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src={project.video} type="video/mp4" />
                  {t('videoNotSupported') || 'Your browser does not support the video tag.'}
                </video>
              </div>
            </section>
          )}
          <section id="contribution" className="pt-4">
            <h2 className="text-sm font-mono text-gray-400 mb-4">
              {t('contribution')}
            </h2>
            <ul className="space-y-2">
              {project.contribution.map((item, i) => {
                const translatedContribution = tproject(`contribution_${i}`);
                return (
                  <li key={i} className="text-sm text-gray-600 dark:text-slate-300">
                    {translatedContribution || item}
                  </li>
                );
              })}
            </ul>
          </section>


          <section id="tech-stack" className="pt-4">
            <h2 className="text-sm font-mono text-gray-400 mb-4">
              {t('techStack')}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <li
                  key={i}
                  className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>

          {project.link && (
            <section className="pt-4">
              <h2 className="text-sm font-mono text-gray-400 mb-4">
                {t('links')}
              </h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:text-gray-600"
              >
                {tproject('linkText') || project.linkText}
              </a>
            </section>
          )}
        </article>
      </main>
    </div>
  );
}
