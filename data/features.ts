import {
  FaMusic,
  FaFolderOpen,
  FaBookOpen,
  FaHeart,
} from "react-icons/fa";

export interface FeatureItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: React.ElementType;
  gradient: string;
  image: string;
}

export const features: FeatureItem[] = [
  {
    id: 1,
    title: "Music",
    subtitle: "Worship Songs",
    description:
      "Discover original worship music that glorifies Christ and encourages believers through every season of life.",
    href: "/music",
    icon: FaMusic,
    gradient: "from-cyan-500/90 via-cyan-600/60 to-transparent",
    image: "/images/features/music.jpg",
  },

  {
    id: 2,
    title: "Projects",
    subtitle: "Initiatives & Projects",
    description:
      "Explore initiatives, creative projects, collaborations and campaigns created to serve, encourage and make a meaningful difference.", 
    href: "/projects",
    icon: FaFolderOpen,
    gradient: "from-orange-500/90 via-orange-600/60 to-transparent",
    image: "/images/features/projects.jpg",
  },

  {
    id: 3,
    title: "Books",
    subtitle: "Devotionals",
    description:
      "Read devotionals, Bible studies and Christian books written to strengthen faith and deepen your walk with God.",
    href: "/books",
    icon: FaBookOpen,
    gradient: "from-emerald-500/90 via-green-600/60 to-transparent",
    image: "/images/features/books.jpg",
  },

  {
    id: 4,
    title: "About",
    subtitle: "Who We Are",
    description:
      "Learn the vision behind Word & Voice and the passion to share Christ through music, books and creative media.",
    href: "/about",
    icon: FaHeart,
    gradient: "from-violet-500/90 via-purple-600/60 to-transparent",
    image: "/images/features/about.jpg",
  },
];