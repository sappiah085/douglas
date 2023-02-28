import Image from "next/image";
import Link from "next/link";
import logo from "../../public/static/logo.png";
import { useEffect } from "react";
const nav_link: { url: string; label: string }[] = [
  {
    url: "#recipes",
    label: "Recipes",
  },
  {
    url: "/",
    label: "Popular",
  },
  {
    url: "#customer",
    label: "Customer reviews",
  },
  {
    url: "#partners",
    label: "Our Partners",
  },
  {
    url: "#contact",
    label: "Contact us",
  },
];

export default function NavBar() {
  return (
    <header className="flex w-full  fixed top-0 z-30 bg-gradient-to-r from-white via-white to-transparent">
      <nav className="flex justify-between px-14 gap-28 items-center w-full h-full">
        <div>
          <Image
            priority
            className="h-full"
            src={logo}
            alt="logo"
            aria-label="logo"
          />
        </div>
        <ul
          aria-label="navigation links"
          className="flex gap-4 items-center h-full pt-7 pr-60"
        >
          {nav_link.map(({ label, url }) => (
            <li key={label}>
              <Link className="font-light text-xl" href={url}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
