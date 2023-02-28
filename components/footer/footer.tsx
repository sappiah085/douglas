import Image from "next/image";
import logo from "../../public/static/logo.png";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";
const about = [
  {
    label: "Features",
  },
  {
    label: "FAQ’s",
  },
  {
    label: "News",
  },
  {
    label: "Pricing",
  },
];
const company = [
  {
    label: "Core values",
  },
  {
    label: "Partner w/ us",
  },
  {
    label: "Blog",
  },
  {
    label: "Contact",
  },
];

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#FFECE3]  p-12 flex justify-between flex-wrap gap-10 after:left-0 after:bottom-[22%] after:h-[2px] after:absolute after:w-full after:bg-[#626262]/10">
      <div className="flex flex-col gap-4 max-w-sm">
        <Image className="h-[70px] object-contain" src={logo} alt="logo" />
        <p className="font-light text-[#666666]">
          We believe brand interaction is key in commu- nication. Real
          innovations and a positive.
        </p>
        <div className="flex items-center gap-4 text-2xl">
          <AiOutlineTwitter />
          <AiFillYoutube />
          <AiOutlineInstagram />
        </div>
      </div>
      <div className=" flex justify-between gap-14 flex-wrap">
        <div className=" flex flex-col gap-3">
          <h6 className="text-xl">About us</h6>
          <ul className=" flex flex-col gap-3">
            {about.map(({ label }) => (
              <li key={label}>
                <Link className="font-light text-[#666666]" href={"/"}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex flex-col gap-3 ">
          <h6 className="text-xl">Company</h6>
          <ul className=" flex flex-col gap-3">
            {company.map(({ label }) => (
              <li key={label}>
                <Link className="font-light text-[#666666]" href={"/"}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <form className="flex flex-col gap-5 min-w-[300px]" action="/">
          <h6 className="text-main text-xl">Get in touch</h6>
          <input
            className="w-full bg-[#626262]/10 outline-[#626262] p-3 text-[#626262] placeholder:text-[#626262]"
            type="text"
            placeholder="Your email here..."
          />
          <button className="bg-main text-white text-xl p-5 py-2" type="submit">
            Get Access
          </button>
        </form>
      </div>
      <span className=" flex justify-between w-full font-light items-center text-[#626262] mt-28 flex-wrap gap-5">
        <h3>FoodFighters © 2023 All Right Reserved</h3>
        <span className="flex gap-4 items-center">
          <Link href={"/"}>Terms of Service</Link>
          <Link href={"/"}>Privacy Policy</Link>
        </span>
      </span>
    </footer>
  );
}
