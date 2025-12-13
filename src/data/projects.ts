export interface Project {
  id: string;
  title: string;
  tags: string[];
  image: string;
  images?: string[];
  link: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "resident-evil-8",
    title: "Resident Evil 8",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/3.png",
    images: ["/Pages/1.png", "/Pages/2.png", "/Pages/3.png"],
    link: "https://resident-evil-8-one.vercel.app/",
    description: "A fan-made tribute website dedicated to Resident Evil Village. Features an immersive dark atmosphere with cinematic visuals, character showcases, and game information that captures the horror essence of the iconic franchise.",
  },
  {
    id: "montclair",
    title: "Montclair",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/1.png",
    images: ["/Pages/4.png", "/Pages/5.png", "/Pages/6.png"],
    link: "https://montclair-jet.vercel.app/",
    description: "A luxury web store showcasing premium timepieces with an elegant, minimalist design. Features smooth animations and a refined user experience tailored for high-end watch enthusiasts.",
  },
  {
    id: "egs-entreprenor-as",
    title: "EGS Entreprenør AS",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/6.png",
    images: ["/Pages/15.png", "/Pages/16.png", "/Pages/17.png", "/Pages/18.png", "/Pages/19.png", "/Pages/20.png"],
    link: "https://egs-entreprenor-as.vercel.app/",
    description: "A professional website for EGS Entreprenør AS, your reliable partner for groundwork and construction in Hallingdal and Eastern Norway. Features excavator services, project showcases, and company information with a focus on delivering quality in every project.",
  },
  {
    id: "steel-stallion",
    title: "Steel Stallion",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/2.png",
    images: ["/Pages/7.png", "/Pages/8.png", "/Pages/9.png"],
    link: "https://steel-stallion.vercel.app/",
    description: "A vintage motorcycle showcase featuring classic bikes with a rugged, nostalgic aesthetic. Built with smooth transitions and a bold design that captures the spirit of timeless two-wheeled machines.",
  },
  {
    id: "marilag",
    title: "Marilag",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/4.png",
    images: ["/Pages/10.png", "/Pages/11.png", "/Pages/12.png"],
    link: "https://marilag-eta.vercel.app/",
    description: "A stunning travel website showcasing the beauty of Boracay. Features breathtaking imagery, destination guides, and booking information designed to inspire wanderlust and help travelers plan their perfect island getaway.",
  },
  {
    id: "brussels-brewery",
    title: "Brussels Brewery",
    tags: ["React", "Tailwind CSS", "ShadCN"],
    image: "/Projects/5 .png",
    images: ["/Pages/13.png", "/Pages/14.png"],
    link: "https://brussels-brewery.vercel.app/",
    description: "A cozy coffee shop website inspired by Brussels Brewery. Features an inviting warm aesthetic, menu showcases, and store information that captures the artisanal coffee culture and European café ambiance.",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
