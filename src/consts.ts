import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Tpark's playground",
  DESCRIPTION: "A collection of projects, experiments, and random thoughts by Taeju Park — Platform & DevOps engineer and homelab tinkerer.",
  AUTHOR: "Taeju Park",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on homelab, self-hosting, DevOps, and whatever I'm building.",
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Things I build and self-host — with links to repos and docs.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "philippark89@gmail.com",
    HREF: "mailto:philippark89@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "philippark89",
    HREF: "https://github.com/philippark89"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "taeju-park",
    HREF: "https://www.linkedin.com/in/taeju-park/",
  },
]
