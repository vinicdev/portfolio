import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex flex-col items-center pt-[90px] relative min-h-screen max-sm:justify-center max-sm:pt-[120px]">
      <p className="flex gap-2 subtitle-resize text-gray-7">
        👋, meu nome é<span className="font-bold text-blue-dark">Vinicius</span>{" "}
        e eu sou freelancer
      </p>

      <h1 className="mt-[12px] title-risize text-white-normal font-bold flex flex-col items-center gap-4">
        <span>FRONT-END</span>
        <span className="text-transparent text-stroke">& UI DESIGN</span>
      </h1>

      <Image
        width={550}
        height={200}
        alt="Desenvolvedor front-end vinicius cardoso"
        src="/desenvolvedor-vinicius-cardoso.png"
        className="absolute cursor-pointer image-resize grayscale-image max-sm:relative max-sm:top-[-110px]"
      />

      <div className="w-[50px] h-[50px] absolute bottom-[85px] left-1/2 transform -translate-x-1/2 animate-bounce flex justify-center items-center cursor-pointer ml-[-25px]">
        <FaAngleDown size="18px" className="text-black-4" />
      </div>
    </header>
  );
}
