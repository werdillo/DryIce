import {
  House,
  Users,
  Car,
  ClipboardList,
  Images,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SIDEBAR_CONFIG } from "./config";
import type { SidebarProps, SidebarLink } from "./types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  house: House,
  users: Users,
  car: Car,
  "clipboard-list": ClipboardList,
  images: Images,
};

function NavItem({ link, vertical = false }: { link: SidebarLink; vertical?: boolean }) {
  const Icon = iconMap[link.icon];

  return (
    <a
      href={link.href}
      className={cn(
        "group flex items-center justify-center gap-2 text-white/70 transition-colors hover:text-white",
        vertical ? "flex-col py-4 px-5" : "flex-col flex-1 py-2",
      )}
      aria-label={link.label}
    >
      {Icon && <Icon className="h-6 w-6 shrink-0" />}
      <span className="text-[10px] font-medium leading-none tracking-wide">
        {link.label}
      </span>
    </a>
  );
}

export function Sidebar({ config }: SidebarProps = {}) {
  const sidebarConfig = { ...SIDEBAR_CONFIG, ...config };

  return (
    <>
      {/* Mobile — fixed bottom bar */}
      <nav
        className="fixed bottom-0 left-0 z-50 flex w-full flex-row items-stretch bg-[#151515] lg:hidden"
        aria-label={sidebarConfig.ariaLabel}
        role="navigation"
      >
        {sidebarConfig.links.map((link) => (
          <NavItem key={link.href} link={link} vertical={false} />
        ))}
      </nav>

      {/* Desktop — fixed right-center vertical bar */}
      <nav
        className="fixed right-0 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-stretch bg-[#151515] lg:flex"
        aria-label={sidebarConfig.ariaLabel}
        role="navigation"
      >
        {sidebarConfig.links.map((link) => (
          <NavItem key={link.href} link={link} vertical={true} />
        ))}
      </nav>
    </>
  );
}

export type { SidebarProps, SidebarConfig, SidebarLink } from "./types";
export { SIDEBAR_CONFIG } from "./config";
