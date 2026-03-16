export interface SidebarLink {
  href: string;
  label: string;
  icon: string; // lucide icon name
}

export interface SidebarConfig {
  links: SidebarLink[];
  ariaLabel: string;
}

export interface SidebarProps {
  config?: Partial<SidebarConfig>;
}
