export interface NavigationItem {
  id: number;
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    id: 1,
    label: "Music",
    href: "/music",
  },

  {
    id: 2,
    label: "Books",
    href: "/books",
  },

  {
    id: 3,
    label: "Projects",
    href: "/projects",
  },

  {
    id: 4,
    label: "About",
    href: "/about",
  },

  {
    id: 5,
    label: "Downloads",
    href: "/downloads",
  },

  {
    id: 6,
    label: "Contact",
    href: "/contact",
  },
];