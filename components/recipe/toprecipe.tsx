import fish from "../../public/static/fish.png";
import chicken from "../../public/static/chicken.png";
import noodles from "../../public/static/noodles.png";
import brus from "../../public/static/brus.png";
import veg from "../../public/static/veg.png";
import RecipeCard from "../recipecard/recipecard";

import Image from "next/image";
import Link from "next/link";
const recipes = [
  {
    image: fish,
    link: "/",
    label: "Chilli lime fish",
    color: "#FF700F",
  },
  {
    image: chicken,
    link: "/",
    label: "Crispy baked chicken",
    color: "#3C1713",
  },
  {
    image: noodles,
    link: "/",
    label: "Stir fried noodles",
    color: "#F39716",
  },
  {
    image: brus,
    link: "/",
    label: "Bruschetta",
    color: "#D64126",
  },
];

export default function TopRecipe() {
  return (
    <section className="w-[90%] mx-auto my-8 mt-16 flex-col  flex ">
      <h3 className="py-5 text-2xl font-medium">Top Recipes</h3>
      <div
        id="recipes"
        className="flex w-full justify-center lg:justify-between lg:gap-y-5 lg:gap-0 items-center flex-wrap gap-5 scroll-mt-40"
      >
        {recipes.map(({ label, ...el }) => (
          <RecipeCard label={label} {...el} key={label} />
        ))}
      </div>
      <div className="  w-full py-28  px-5 md:px-0 sm:columns-2 space-y-4 ">
        <div className="flex flex-col gap-4 w-full flex-1 min-w-[310px] ">
          <h2 className="lg:text-5xl text-2xl font-bold">
            Eat healthy, stay healthy
          </h2>
          <p className="flex flex-col   ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eius
            repellat, mollitia aperiam quisquam voluptatibus numquam aliquid
            nulla recusandae alias quod sequi sit? Consequuntur veritatis quos
            adipisci, dolorum illo doloribus. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Odio assumenda adipisci asperiores
            molestiae exercitationem officia voluptate voluptates debitis eius
            atque cumque deleniti, quasi ipsum nemo quibusdam illum quo
            distinctio ut enim consequuntur rem cum dolore incidunt. Asperiores
            vitae accusamus laudantium expedita iure atque aliquid dicta! Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
            quibusdam, quia ab doloribus quam a deserunt iusto corrupti
            excepturi architecto dolor quod optio possimus sed vero odit maxime,
            officia ad deleniti velit eum id. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Modi illum fugiat adipisci voluptas!
            Adipisci cumque sapiente quae, debitis facere perspiciatis tenetur!
            Tempore ab cumque, minima numquam, iste excepturi, accusamus cum
            fugit in officiis quasi.
            <Link className="text-[#0081F9]" href={"/"}>
              Read more {" >>"}{" "}
            </Link>
          </p>
        </div>
        <Image
          className="max-w-lg mx-auto w-full flex-1 min-w-[310px]  "
          src={veg}
          alt="vegetables"
        />
      </div>
    </section>
  );
}
