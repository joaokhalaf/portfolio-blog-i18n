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

  return (
    <div className="relative flex">
      <main className="px-6 dark:text-slate-100 w-full max-w-4xl mx-auto">
        {/* Navigation */}
        <nav className="flex items-start gap-4 mb-12 text-sm">
          <Link href="/" className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-slate-300 transition-colors">
            <ArrowLeft size={16} />
            {t('back')}
          </Link>
        </nav>

        <article className="space-y-16">
          {/* Project Header */}
          <header className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl font-light tracking-tight">
                {tproject('title') || project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                {tproject('description') || project.description}
              </p>
            </div>

            {/* Project Meta Info */}
            <div className="flex flex-wrap gap-8 text-sm text-gray-500 dark:text-slate-400 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span className="font-medium">{t('year')}:</span>
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="font-medium">{t('duration')}:</span>
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span className="font-medium">{t('role')}:</span>
                <span>{project.role}</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-1 rounded-xl">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={tproject('title') || project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Case Study Sections */}
          <div className="space-y-16">
            {/* Problem Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-medium mb-4">{t('problem')}</h2>
              <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                  {tproject('problem') || project.problem}
                </p>
              </div>
            </section>

            {/* Solution Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-medium mb-4">{t('solution')}</h2>
              <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                  {tproject('solution') || project.solution}
                </p>
              </div>
            </section>

            {/* Demo Video */}
            {project.video && (
              <section className="space-y-6">
                <h2 className="text-2xl font-medium mb-4">{t('video')}</h2>
                <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
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

            {/* Key Highlights */}
            <section className="space-y-6">
              <h2 className="text-2xl font-medium mb-4">{t('highlights')}</h2>
              <div className="space-y-4">
                {project.highlights.map((highlight, i) => {
                  const translatedHighlight = tproject(`highlights_${i}`);
                  return (
                    <div key={i} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold min-w-[24px]">
                        {i + 1}.
                      </span>
                      <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                        {translatedHighlight || highlight}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Results/Outcome */}
            <section className="space-y-6">
              <h2 className="text-2xl font-medium mb-4">{t('outcome')}</h2>
              <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                  {tproject('outcome') || project.outcome}
                </p>
              </div>
            </section>

            {/* Technical Details */}
            <section className="space-y-8">
              <h2 className="text-2xl font-medium">{t('details')}</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* My Contribution */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-slate-100">
                    {t('contribution')}
                  </h3>
                  <ul className="space-y-3">
                    {project.contribution.map((item, i) => {
                      const translatedContribution = tproject(`contribution_${i}`);
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-slate-300">
                            {translatedContribution || item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-slate-100">
                    {t('techStack')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Project Link */}
            {project.link && (
              <section className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">{t('links')}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
                  >
                    {tproject('linkText') || project.linkText}
                  </a>
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}
