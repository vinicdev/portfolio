"use client";

import Marquee from "react-fast-marquee";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export default function CustomMarquee({
  items,
  direction = "left",
  speed = 50,
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className} py-12 relative`}>
      <div className="absolute w-[102%] h-[115px] bg-gradient-2 transform rotate-[-3deg] -left-2 -z-10" />

      <div className="flex items-center w-full h-[104px] bg-white-dark z-20">
        <Marquee direction={direction} speed={speed} gradient={false}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 px-4 whitespace-nowrap"
            >
              <span className="text-black-dark text-[40px] font-medium">
                {item}
              </span>
              <div className="w-[16px] h-[16px] bg-no-repeat bg-cover flex items-center justify-center icon-star" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
