import Image from "next/image";
import partner from "../../public/static/partner.png";
export default function Partner() {
  return (
    <section
      id="partners"
      className="p-12 py-20 flex w-[90%] mx-auto flex-col gap-6 justify-center scroll-mt-24 items-center"
    >
      <h2 className="text-main text-4xl font-semibold ">Our partners</h2>
      <Image src={partner} alt="partners" />
    </section>
  );
}
