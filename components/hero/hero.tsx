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
    <section className="w-full h-screen flex justify-between gap-10 items-center pt-8 px-14 relative">
      <Circles color={quest[index].color} />
      <div className="flex flex-col z-10 items-center text-center gap-10 max-w-3xl px-4">
        <h1 className="text-6xl flex gap-2 flex-col font-inter font-bold relative">
          What would you love to
          <span
            ref={labelRef}
            className="inline-flex  relative gap-1 overflow-hidden   justify-center  items-center   "
          >
            have?{" "}
            <div className="h-full w-2/3">
              <span className="flex absolute flex-col  top-0  items-start">
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
        <h2 className="text-xl font-light">
          We are super excited to give you the best. We give you hot and well
          prepared meals like no other in town.
        </h2>
      </div>
      <div className="z-10 flex-1 h-[450px] flex flex-col relative overflow-hidden ">
        <div className="relative h-full w-full ">
          {quest.map(({ label, image }, id) => (
            <Image
              ref={imageRef}
              key={label}
              className={
                id === 0
                  ? "absolute h-full object-cover w-auto top-0 left-0"
                  : "absolute h-full object-cover w-auto top-0 left-0 transition-all duration-500"
              }
              src={image}
              style={{
                transform: `translateY(${(id - index) * height.image}px) ${
                  id == 0 ? "scale(1.2)" : "scale(1)"
                }`,
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
