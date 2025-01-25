import Image from "next/image";

interface iconTechProps {
  pathIcon: string;
}

export default function IconTech({ pathIcon }: iconTechProps) {
  return (
    <div className="w-[80px] h-[80px] shadow bg-black-light flex items-center justify-center rounded-full">
      <div
        className={`w-[40px] h-[40px] bg-no-repeat bg-cover flex items-center justify-center ${pathIcon}`}
      >
        {/* <Image width={40} height={40} src={"/icon_angular.svg"} alt="teste" /> */}
      </div>
    </div>
  );
}
