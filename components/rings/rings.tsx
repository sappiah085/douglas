import { ringsColor } from "../resuse/colors";
const Circles = ({ color }: { color: string }) => (
  <div className="absolute aspect-square  z-[2] right-[0%] translate-x-[50%]  top-0 h-full">
    {[`${color}4`, `${color}3`, `${color}2`, `${color}1`].map((color, id) => {
      return (
        <div
          key={color}
          style={{
            height: `${((id + 1) / 4) * 100}vh`,
            zIndex: 4 - id,
            backgroundColor: ringsColor[color],
          }}
          className={`absolute rounded-[50%]  top-[50%] aspect-square left-[50%]  translate-x-[-50%] translate-y-[-50%] circle`}
        ></div>
      );
    })}
  </div>
);

export default Circles;
