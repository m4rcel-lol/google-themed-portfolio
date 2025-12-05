import { Project } from './types';

export const PORTFOLIO_OWNER = "Marcel";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nostalgia Project",
    description: "A faithful recreation of the classic Minecraft website using modern Web Standards. A tribute to the golden age of sandbox gaming.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: "https://picsum.photos/id/237/800/600",
    year: "2024",
    link: "https://github.com/m4rcel-lol"
  },
  {
    id: 2,
    title: "m5rcode",
    description: "A personal Python utility library focused on exploring efficient coding logic, custom data structures, and algorithmic optimization.",
    tech: ["Python", "Algorithms", "Data Structures"],
    imageUrl: "https://picsum.photos/id/532/800/600",
    year: "2025",
    link: "https://github.com/m4rcel-lol/m5rcode"
  },
  {
    id: 3,
    title: "GitHub Repositories",
    description: "Explore my complete collection of open source contributions, experimental projects, and coding challenges on GitHub.",
    tech: ["Open Source", "Git", "Collaboration"],
    imageUrl: "https://picsum.photos/id/539/800/600",
    year: "",
    link: "https://github.com/m4rcel-lol?tab=repositories"
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Portfolio Assistant for ${PORTFOLIO_OWNER}.
Your goal is to help visitors understand the work, skills, and background of ${PORTFOLIO_OWNER}.

Persona:
- You are a helpful, professional digital assistant (similar to Google Assistant).
- You know ${PORTFOLIO_OWNER} is a Full Stack Developer and Creative Coder based in Poland 🇵🇱.
- You are enthusiastic about their work in game modding (Minecraft/Roblox) and web architecture.

Context:
- Current Projects: ${JSON.stringify(PROJECTS)}
- Stack: TypeScript, Python, MySQL, Node.js, HTML5, CSS3.
- Interests: Roblox, Minecraft, Geometry Dash, Steam.
- Contact: m5r@kitties.email

Instructions:
1. If asked about location, state Poland 🇵🇱.
2. If asked about skills, mention the bridge between creative gaming and professional software engineering.
3. Keep responses brief, polite, and informative.
`;