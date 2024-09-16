import { Email, Light, Linkedin } from "@/components";
import { ElementType, ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
  children: ReactNode;
  href: string;
  Icon: ElementType;
}

function NavItem({ children, href, Icon }: NavItemProps) {
  return (
    <Link href={href} className="group mr-3 mt-3">
      <div className="flex items-center space-x-2">
        <div className="mb-0">
          <div className="rounded-lg bg-gradient-to-tl from-green-600 to-green-400 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-green-500/40 group-active:translate-y-1">
            <Icon className="w-3 transform text-green-100 transition delay-100 duration-500 ease-out group-hover:scale-110" />
          </div>
        </div>
        <div className="transition-colors group-hover:text-green-50">
          {children}
        </div>
      </div>
    </Link>
  );
}

export default function Nav() {
  return (
    <div className="flex flex-wrap items-center text-base font-medium leading-none text-green-100/80 md:space-x-6">
      <NavItem href="/progetti" Icon={Light}>
        Progetti
      </NavItem>
      <NavItem href="mailto:marcodecarlo.developer@gmail.com" Icon={Email}>
        Contattami
      </NavItem>
      <NavItem
        href="https://www.linkedin.com/in/marco-de-carlo/"
        Icon={Linkedin}
      >
        Linkedin
      </NavItem>
    </div>
  );
}
