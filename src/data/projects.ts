export interface Project {
  id: string;
  title: string;
  tags: string[];
  image: string;
  link: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "resident-evil-8",
    title: "Resident Evil 8",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/3.png",
    link: "https://resident-evil-8-one.vercel.app/",
    description: "A fan-made tribute website dedicated to Resident Evil Village. Features an immersive dark atmosphere with cinematic visuals, character showcases, and game information that captures the horror essence of the iconic franchise.",
  },
  {
    id: "montclair",
    title: "Montclair",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/1.png",
    link: "https://montclair-jet.vercel.app/",
    description: "A luxury web store showcasing premium timepieces with an elegant, minimalist design. Features smooth animations and a refined user experience tailored for high-end watch enthusiasts.",
  },
  {
    id: "steel-stallion",
    title: "Steel Stallion",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/2.png",
    link: "https://steel-stallion.vercel.app/",
    description: "A vintage motorcycle showcase featuring classic bikes with a rugged, nostalgic aesthetic. Built with smooth transitions and a bold design that captures the spirit of timeless two-wheeled machines.",
  },
  {
    id: "marilag",
    title: "Marilag",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/4.png",
    link: "https://marilag-eta.vercel.app/",
    description: "A stunning travel website showcasing the beauty of Boracay. Features breathtaking imagery, destination guides, and booking information designed to inspire wanderlust and help travelers plan their perfect island getaway.",
  },
  {
    id: "brussels-brewery",
    title: "Brussels Brewery",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/5 .png",
    link: "https://brussels-brewery.vercel.app/",
    description: "A cozy coffee shop website inspired by Brussels Brewery. Features an inviting warm aesthetic, menu showcases, and store information that captures the artisanal coffee culture and European café ambiance.",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
