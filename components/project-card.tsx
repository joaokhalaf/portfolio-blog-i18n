'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '@/app/[locale]/data/projects'
import { Link } from '@/i18n/navigation'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative rounded-xl overflow-hidden bg-black/5 dark:bg-white/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link 
        href={{ 
          pathname: '/works/[slug]',
          params: { slug: project.slug }
        }} 
        className="block"
      >
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
        
        <div className="relative p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground font-mono">
                {project.id}
              </p>
              <h3 className="text-xl font-medium mt-1">
                {project.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight className="h-5 w-5" />
            </motion.div>
          </div>
          
          <p className="mt-4 text-muted-foreground line-clamp-2">
            {project.description}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full text-xs bg-black/5 dark:bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

