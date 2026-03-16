import type { SidebarConfig } from "./types";

export const SIDEBAR_CONFIG: SidebarConfig = {
  links: [
    { href: "#home", label: "Home", icon: "house" },
    { href: "#about", label: "About Us", icon: "users" },
    { href: "#machines", label: "Machines", icon: "car" },
    { href: "#services", label: "Services", icon: "clipboard-list" },
    { href: "#gallery", label: "Gallery", icon: "images" },
  ],
  ariaLabel: "Main navigation",
};
