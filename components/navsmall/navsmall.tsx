import Image from "next/image";
import Link from "next/link";
import logo from "../../public/static/logo.png";
import { nav_link } from "../resuse/links";
import { GiForkKnifeSpoon, GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
export default function NavSmall() {
  const [value, setValue] = useState(false);
  return (
    <header className="w-full lg:hidden flex  fixed top-0 z-30 bg-gradient-to-r from-white via-white to-transparent">
      <nav className="flex justify-between  gap-28 items-center w-full ">
        <div >
          <Image
            priority
            className="object-cover h-[70px]  "
            src={logo}
            alt="logo"
            aria-label="logo"
          />
        </div>
        <input
          type="checkbox"
          className="hidden peer"
          name="toggle"
          id="toggle"
          checked={value}
          onChange={() => setValue((pre) => !pre)}
        />
        <label
          htmlFor="toggle"
          className="h-[60px] z-30 flex absolute right-2 top-2 justify-center peer-checked:rotate-0 transition-all duration-200 items-center w-[60px] rotate-90 bg-white rounded-[50%] "
        >
          {value && <GiKnifeFork />}
          {!value && <GiForkKnifeSpoon />}
        </label>
        <ul
          aria-label="navigation links"
          className="gap-4 flex-col flex translate-x-[100%]  peer-checked:translate-x-[0%] transition-all duration-200 w-full justify-center items-center top-0 left-0 absolute bg-white h-screen"
        >
          {nav_link.map(({ label, url }) => (
            <li key={label}>
              <Link
                onClick={() => setValue(false)}
                className="font-light text-xl"
                href={url}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
