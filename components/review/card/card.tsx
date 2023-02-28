import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ReviewCard({
  message,
  name,
  picture,
  work,
  id,
  index,
}: any) {
  const container: any = useRef(null);
  const [width, setWidth] = useState(310);
  useEffect(() => {
    setWidth(container.current.clientWidth);
  }, []);
  return (
    <div
      ref={container}
      style={{
        transform: `translateX(${
          (id - index) * width + 25 * (id - index) + 10
        }px)`,
      }}
      className="bg-white absolute transition-all duration-300  top-0 left-0  p-5 rounded-md drop-shadow-md font-outfit w-[310px]"
    >
      <div className="text-[#459042] text-5xl">“</div>
      <p className="text-md font-light">{message}</p>
      <div className="flex items-start gap-2 mt-8">
        <Image
          className="h-[50px] w-[50px] rounded-3xl"
          src={picture}
          alt={name}
        />
        <div className="flex flex-col ">
          <h4 className="text-md">{name}</h4>
          <h5 className="text-sm font-light">{work}</h5>
        </div>
      </div>
    </div>
  );
}
