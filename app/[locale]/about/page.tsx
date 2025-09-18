import { getTranslations } from 'next-intl/server';
import ClientAboutPage from '@/components/client-about-page';

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');

  const aboutData = {
    title: t('title'),
    bio: {
      part1: t('bio.part1'),
      part2: t('bio.part2'),
      part3: t('bio.part3')
    },
    downloadText: t('downloadResume'),
    experienceTitle: t('experience')
  };
  
  return <ClientAboutPage data={aboutData} />;
}