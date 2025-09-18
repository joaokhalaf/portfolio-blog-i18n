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
    slug: "fluffy-cactus",
    title: "Quantum Banana Flapjack",
    year: 2025,
    role: "Chief Jellybean Wrangler",
    description: "Purple elephants dance silently under the spaghetti moon.",
    image: "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1lfGVufDB8fDB8fHww",
    link: "",
    linkText: "Click here for cosmic turtles",
    tags: ["Banana", "Moonlight", "Platypus"],
    duration: "Approximately a fortnight of jellybeans",
    contribution: ["Moonbeam optimization", "Quantum sandwich assembly", "Invisible ink translation"],
    video: "/imgs/projects/Logs.mp4",
    problem: "When the toaster refuses to sing, the pancakes become rebellious.",
    solution: "Deploying glitter-powered drones to synchronize cloud daydreams.",
    outcome: "Successfully confused 72.5% of all metaphysical cucumbers.",
    highlights: [
      "Harnessed the power of rainbow-infused algorithms.",
      "Invented a new language for communicating with garden gnomes."
    ]
  },
  {
    id: "003",
    slug: "dancing-marshmallow",
    title: "Cat-Hat Chess Extravaganza",
    type: "personal",
    year: 2025,
    role: "Professional Bubble Wrap Popper",
    description: "Cats wearing hats play chess with sentient marshmallows.",
    image: "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1lfGVufDB8fDB8fHww",
    link: "/",
    linkText: "No live narwhal sightings today",
    tags: ["Marshmallow", "Chess", "Cats"],
    duration: "Time flows like a confused platypus",
    contribution: ["Bubble wrap analysis", "Hat coordination", "Sentient marshmallow liaison"],
    problem: "Pineapples refuse to wear socks on Tuesdays.",
    solution: "Implemented a dance protocol for malfunctioning squirrels.",
    outcome: "Reduced spontaneous glitter explosions by 42.7%.",
    highlights: [
      "Coordinated squirrel flash mobs during lunar eclipses.",
      "Developed emotional support devices for plants."
    ]
  },
  {
    id: "002",
    type: "professional",
    slug: "invisible-fish",
    title: "Rainbow Tax Auditor",
    year: 2024,
    role: "Official Cloud Whisperer",
    description: "Rainbows are taxed at 15% during sunny afternoons.",
    image: "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1lfGVufDB8fDB8fHww",
    link: "",
    linkText: "Try catching the invisible fish",
    tags: ["Rainbows", "Clouds", "Invisible Fish"],
    duration: "Three and a half seconds of eternity",
    contribution: ["Cloud shaping", "Rainbow auditing", "Invisible fish tracking"],
    problem: "When socks disappear, time smells like vanilla.",
    solution: "Training clouds to hum lullabies to wandering bicycles.",
    outcome: "Achieved a 99% satisfaction rate among imaginary friends.",
    highlights: [
      "Organized invisible parades for misunderstood dust bunnies.",
      "Implemented scent-based communication for office chairs."
    ]
  },
  {
    id: "001",
    slug: "penguin-rebellion",
    type: "personal",
    title: "Wizard of Jellybean Chaos",
    year: 2023,
    role: "Supreme Nonsense Wizard",
    description: "The jellybean uprising was swiftly quelled by dancing penguins.",
    image: "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGFuaW1lfGVufDB8fDB8fHww",
    tags: ["Wizardry", "Chaos", "Penguins"],
    link: "",
    linkText: "View the madness on Figma",
    duration: "8 weeks of nonsensical fun",
    contribution: ["Spell casting", "Chaos coordination", "Penguin training"],
    problem: "When jellybeans revolt, the moon laughs hysterically.",
    solution: "Cast dance spells on unsuspecting marshmallows.",
    outcome: "Peace restored with 100% satisfaction from imaginary critters.",
    highlights: [
      "Designed magical chaos systems.",
      "Tamed rebellious penguins with rhythmic music."
    ]
  }
];
