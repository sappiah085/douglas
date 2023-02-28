import Link from "next/link";

export default function All() {
  return (
    <section
      className="w-[90%] h-[70vh] mx-auto my-8 mt-16 bg-cover bg-center bg-no-repeat flex flex-col items-end justify-center"
      style={{ backgroundImage: "url(/static/back.jpeg)" }}
    >
      <div className="pr-24 max-w-md flex flex-col gap-5 items-start ">
        <h2 className="text-4xl font-bold">Yummy, just like Mummy’s</h2>
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
