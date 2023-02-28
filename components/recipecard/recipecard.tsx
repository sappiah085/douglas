import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({
  link,
  label,
  image,
  color,
}: {
  link: string;
  label: string;
  image: any;
  color: string;
}) {
  return (
    <Link href={link} className="w-full flex flex-col lg:w-[310px]">
      <Image className="w-full" src={image} alt={label} />
      <h4
        style={{ backgroundColor: color }}
        className={`px-5 py-3 text-xl text-center text-white`}
      >
        {label}
      </h4>
    </Link>
  );
}
