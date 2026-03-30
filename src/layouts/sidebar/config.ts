import type { SidebarConfig } from "./types";

export const SIDEBAR_CONFIG: SidebarConfig = {
  links: [
    { href: "#main", label: "Home", icon: "house" },
    { href: "#hero", label: "About Us", icon: "users" },
    { href: "#services", label: "Machines", icon: "car" },
    { href: "#feature", label: "Services", icon: "clipboard-list" },
    { href: "#gallery", label: "Gallery", icon: "images" },
  ],
  ariaLabel: "Main navigation",
};
