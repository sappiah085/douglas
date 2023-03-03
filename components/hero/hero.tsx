import { useEffect, useRef, useState } from "react";
import Circles from "../rings/rings";
import chef from "../../public/static/1.png";
import italian from "../../public/static/italian.png";
import french from "../../public/static/french.png";
import english from "../../public/static/english.png";
import german from "../../public/static/german.png";
import Image from "next/image";
import { ringsColor } from "../resuse/colors";

const quest = [
  {
    label: "",
    image: chef,
    color: "orange",
  },
  { label: "English?", image: english, color: "noodle" },
  { label: "German?", image: german, color: "purple" },
  { label: "French?", image: french, color: "french" },
  { label: "Italian?", image: italian, color: "italian" },
];

export default function Hero() {
  const [height, setHeight] = useState({ label: 12, image: 200 });
  const [index, setIndex] = useState(0);
  const labelRef: any = useRef(null);
  const imageRef: any = useRef(null);

  useEffect(() => {
    setHeight({
      label: labelRef.current.clientHeight,
      image: imageRef.current.clientHeight,
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index > quest.length - 2) {
        setIndex(0);
      } else {
        const inc = index + 1;
        setIndex(inc);
      }
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, [index]);
  return (
    <section className="w-full min-h-screen flex justify-between gap-10 items-center md:pt-8 md:px-14 px-2 relative flex-wrap pt-24">
      <Circles color={quest[index].color} />
      <div className="flex flex-col z-10 items-center text-center gap-10 max-w-4xl px-4">
        <h1 className="text-4xl  gap-2 flex-col font-inter font-bold relative justify-center flex md:hidden ">
          What would you love to have?
          <span
            ref={labelRef}
            className="inline-flex relative gap-1 overflow-hidden items-center "
          >
            <span className="text-white ">.</span>
            <div className="h-full ">
              <span className="flex w-full absolute flex-col top-0">
                {quest.map(({ label, color }, id) => (
                  <div
                    style={{
                      transform: `translateY(${
                        (id - index) * height.label + 2
                      }px)`,
                      opacity: id != index ? 0 : 1,
                      color: ringsColor[color + "4"],
                    }}
                    className={
                      "absolute top-0  w-full transition-all duration-500"
                    }
                    key={label}
                  >
                    {label}
                  </div>
                ))}
              </span>
            </div>
          </span>
        </h1>

        <h1 className="lg:text-6xl text-4xl  gap-2 flex-col font-inter font-bold relative justify-center hidden md:flex ">
          What would you love to
          <span
            ref={labelRef}
            className="inline-flex relative gap-1 overflow-hidden   md:justify-center  items-center "
          >
            have?{" "}
            <div className="h-full w-2/3 ">
              <span className="flex absolute flex-col  top-0  ">
                {quest.map(({ label, color }, id) => (
                  <div
                    style={{
                      transform: `translateY(${
                        (id - index) * height.label + 2
                      }px)`,
                      opacity: id != index ? 0 : 1,
                      color: ringsColor[color + "4"],
                    }}
                    className={
                      "absolute top-0 left-0 transition-all duration-500"
                    }
                    key={label}
                  >
                    {label}
                  </div>
                ))}
              </span>
            </div>
          </span>
        </h1>

        <h2 className="md:text-xl text-lg max-w-xl font-light ">
          We are super excited to give you the best. We give you hot and well
          prepared meals like no other in town.
        </h2>
      </div>
      <div className="z-10 flex-1 min-w-[300px] flex-shrink-0 h-[450px]  relative overflow-hidden ">
        <div className="relative   h-full w-full scale-[0.9]">
          {quest.map(({ label, image }, id) => (
            <Image
              ref={imageRef}
              key={label}
              className={
                id === 0
                  ? "absolute h-[90%] object-contain lg:w-auto  top-0 left-0"
                  : "absolute h-[90%] object-contain   lg:w-auto  top-0 left-0 transition-all duration-500 "
              }
              src={image}
              style={{
                transform: `translateY(${(id - index) * height.image}px)`,
                opacity: id != index ? 0 : 1,
              }}
              alt={label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
