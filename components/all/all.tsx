import Link from "next/link";

export default function All() {
  return (
    <section
      className="w-[90%] relative lg:h-[70vh] p-14 pr-0 lg:p-0 mx-auto my-8 mt-16 bg-cover bg-center bg-no-repeat flex flex-col items-end justify-center after:bg-[#000]/30 after:h-full after:w-full after:top-0 after:left-0 after:absolute lg:after:hidden"
      style={{ backgroundImage: "url(/static/back.jpeg)" }}
    >
      <div className="lg:pr-24 z-10 pr-3 max-w-md flex flex-col gap-5 items-start ">
        <h2 className="lg:text-4xl text-3xl font-bold text-white lg:text-[#000]">Yummy, just like Mummy’s</h2>
        <Link
          className="bg-main rounded-md text-white text-xl py-2 px-5"
          href={"/"}
        >
          See them all
        </Link>
      </div>
    </section>
  );
}
