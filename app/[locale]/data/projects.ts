export interface Project {
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  role: string;
  contribution: string[];
  highlights: string[];
  tags: string[];
  year: number;
  duration: string;
  image: string;
  video?: string;
  link?: string;
  linkText?: string;
  type?: string;
  id: string;
  slug: string;
  title: string;
  gallery?: {
    problem_img: string;
    solution_img: string;
    outcome_img?: string;
  };
}

export const projects: Project[] = [
  {
    type: "professional",
    id: "004",
    slug: "log-manager",
    title: "Log Management System",
    year: 2025,
    role: "Full Stack Developer",
    description: "Comprehensive logging platform for enterprise applications with real-time monitoring and alerting capabilities.",
    image: "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1lfGVufDB8fDB8fHww",
    link: "",
    linkText: "View Live Demo",
    tags: ["ASP.NET", "React", "PostgreSQL"],
    duration: "6 months",
    contribution: ["Backend API Development", "Real-time Dashboard", "Email Alert System"],
    video: "/imgs/projects/Logs.mp4",
    problem: "Scattered logs across multiple services made debugging and monitoring extremely difficult for development teams.",
    solution: "Built a centralized logging system with REST API integration and real-time dashboard for streamlined monitoring.",
    outcome: "Reduced debugging time by 70% and improved system visibility across all development teams.",
    highlights: [
      "RESTful API built with ASP.NET Core for high-performance data ingestion.",
      "Real-time email alerting system with configurable thresholds and notifications."
    ]
  },
  {
    id: "003",
    slug: "anime-tracker",
    title: "Anime Tracking App",
    type: "personal",
    year: 2025,
    role: "Frontend Developer",
    description: "Personal anime tracking application with API integration for discovering and organizing anime watchlists.",
    image: "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1lfGVufDB8fDB8fHww",
    link: "/",
    linkText: "Try the App",
    tags: ["React", "TypeScript", "Jikan API"],
    duration: "3 months",
    contribution: ["UI/UX Design", "API Integration", "State Management"],
    problem: "Anime enthusiasts struggled to keep track of their viewing progress across multiple series and discover new content.",
    solution: "Created an intuitive tracking app with Jikan API integration for comprehensive anime data and personalized lists.",
    outcome: "Delivered a responsive system with high user engagement and positive community feedback.",
    highlights: [
      "Integration with Jikan API for real-time anime data and comprehensive series information.",
      "Personalized dashboard with custom watchlists, favorites, and progress tracking features."
    ]
  },
  {
    id: "002",
    type: "professional",
    slug: "expense-gov",
    title: "Government Expense Tracker",
    year: 2024,
    role: "Data Visualization Developer",
    description: "Public transparency dashboard transforming government spending data into accessible visualizations.",
    image: "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1lfGVufDB8fDB8fHww",
    link: "",
    linkText: "View Live Site",
    tags: ["Next.js", "Chart.js", "Python"],
    duration: "4 months",
    contribution: ["Data Processing", "Frontend Development", "Accessibility Implementation"],
    problem: "Complex government spending data remained inaccessible to citizens, limiting transparency and civic engagement.",
    solution: "Developed an interactive visualization platform using Next.js and Chart.js for clear data presentation.",
    outcome: "Increased public engagement with government data and received positive feedback from transparency advocates.",
    highlights: [
      "Interactive data visualizations using Chart.js for clear spending pattern analysis.",
      "Fully responsive and accessible interface following WCAG guidelines for public use."
    ]
  },
  {
    id: "001",
    slug: "dolly-rebrand",
    type: "personal",
    title: "Vintage Brand Redesign",
    year: 2023,
    role: "Brand Designer",
    description: "Complete visual identity renovation balancing nostalgic heritage with contemporary design appeal.",
    image: "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1lfGVufDB8fDB8fHww",
    tags: ["Branding", "Figma", "Design System"],
    link: "",
    linkText: "View on Figma",
    duration: "8 weeks",
    contribution: ["Brand Strategy", "Logo Design", "Design System Creation"],
    problem: "Outdated visual identity failed to attract younger demographics while losing connection with brand heritage.",
    solution: "Redesigned complete brand system including logo, color palette, and typography with modern sensibilities.",
    outcome: "Successfully balanced nostalgia with contemporary appeal, achieving strong market reception and increased shelf presence.",
    highlights: [
      "Comprehensive visual system redesign maintaining brand heritage while modernizing appeal.",
      "Premium packaging redesign with focus on shelf impact and consumer connection."
    ]
  }
];
