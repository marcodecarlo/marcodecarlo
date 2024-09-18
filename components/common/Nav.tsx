import { Email, GithubIcon, Light, Linkedin } from "@/components";
import { ElementType, ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
  children?: ReactNode;
  href: string;
  targetBlank?: boolean;
  className?: string;
  Icon: ElementType;
}

function NavItem({
  children,
  href,
  targetBlank = false,
  className,
  Icon,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={`group ${className}`}
      target={targetBlank ? "_blank" : ""}
    >
      <div className="sm:flex sm:items-center space-x-2">
        <div className="flex justify-center sm:block">
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

interface NavProps {
  sticky: boolean;
}

const Nav = ({ sticky }: NavProps) => {
  const linkStyle = sticky ? "mr-3" : "mr-3 mt-3";

  return (
    <div
      className={`flex items-center text-base font-medium leading-none text-green-100/80 md:space-x-6 ${
        sticky ? "justify-end" : "flex-wrap"
      }`}
    >
      <NavItem href="/progetti" Icon={Light} className={linkStyle}>
        Progetti
      </NavItem>
      <NavItem
        href="mailto:marcodecarlo.developer@gmail.com"
        Icon={Email}
        className={linkStyle}
      >
        Contattami
      </NavItem>
      <NavItem
        href="https://www.linkedin.com/in/marco-de-carlo/"
        targetBlank
        className={linkStyle}
        Icon={Linkedin}
      >
        Linkedin
      </NavItem>
    </div>
  );
};

const NavFooter = () => {
  return (
    <div
      className={`flex items-center text-base font-medium leading-none text-green-100/80 space-x-6 flex-wrap`}
    >
      <NavItem
        href="https://www.linkedin.com/in/marco-de-carlo/"
        targetBlank
        Icon={Linkedin}
      />

      <NavItem
        href="https://github.com/marcodecarlo"
        targetBlank
        Icon={GithubIcon}
      />

      <NavItem href="mailto:marcodecarlo.developer@gmail.com" Icon={Email} />
    </div>
  );
};

export { Nav, NavFooter };
