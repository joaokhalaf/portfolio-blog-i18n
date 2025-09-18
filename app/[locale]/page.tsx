import { projects } from '@/app/[locale]/data/projects';
import { ProjectCard } from '@/components/project-card';
import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Principal");
  const homeT = await getTranslations("HomePage");

  return (
    <main className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-xl font-normal">{t("title")}</h1>
        <div className="max-w-xl space-y-4 text-gray-600">
          <p>{t("description")}</p>
        </div>
      </section>
      <section className="space-y-8">
        <h2 className="text-xl font-medium">{homeT("featuredWork")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/works"
            className="group inline-flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
          >
            {homeT("viewAllWorks")}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  )
}

