import { useState } from "react";
import man from "../../public/static/man.png";
import woman from "../../public/static/woman.png";
import ReviewCard from "./card/card";
const reviews = [
  {
    name: "Theresa Webb",
    work: "National Service Personel",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing
 elit. Faucibus condimentum neque vitae.Lorem 
ipsum dolor sit amet, consectetur adipiscing`,
    picture: woman,
  },
  {
    name: "TMarvin McKinney",
    work: "National Service Personel",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing
 elit. Faucibus condimentum neque vitae.Lorem 
ipsum dolor sit amet, consectetur adipiscing`,
    picture: man,
  },
  {
    name: "Theresa Webb",
    work: "National Service Personel",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing
 elit. Faucibus condimentum neque vitae.Lorem 
ipsum dolor sit amet, consectetur adipiscing`,
    picture: woman,
  },
  {
    name: "Marvin McKinney",
    work: "National Service Personel",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing
 elit. Faucibus condimentum neque vitae.Lorem 
ipsum dolor sit amet, consectetur adipiscing`,
    picture: man,
  },
];
export default function Review() {
  const [index, setIndex] = useState(0);
  function handleIndex(sign: number) {
    if (index + sign < 0 || index + sign == reviews.length) {
      setIndex(0);
    } else {
      const i = index + sign;
      setIndex(i);
    }
  }
  return (
    <section
      id="customer"
      className="w-full  bg-main flex flex-col md:p-12 p-5 scroll-mt-24"
    >
      <span className="flex  justify-between items-center text-white gap-4 ">
        <span className="flex flex-col gap-2">
          <h2 className="md:text-3xl text-xl ‚font-medium">
            What our Customers say about us
          </h2>
          <h3 className="md:text-lg text-md font-light">
            Don’t just take our word for it. Hear what others have to say
          </h3>
        </span>
        <span className="flex items-center gap-5">
          <button
            onClick={() => handleIndex(-1)}
            className="border-[1px] cursor-pointer text-xl rounded-[50%] h-[40px] w-[40px] flex justify-center items-center"
          >
            &larr;
          </button>
          <button
            onClick={() => handleIndex(+1)}
            className="border-[1px] cursor-pointer text-xl rounded-[50%] h-[40px] w-[40px] flex justify-center items-center"
          >
            {" "}
            &rarr;
          </button>
        </span>
      </span>
      <div className="w-full flex  mt-10 overflow-x-hidden min-h-[300px] relative">
        {reviews.map((review, id) => (
          <ReviewCard index={index} key={id} id={id} {...review} />
        ))}
      </div>
    </section>
  );
}
