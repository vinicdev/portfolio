import Image from "next/image";

interface cardCompaniesProps {
  textCard: string;
  imageSrc: string;
}

export default function CardCompanies({
  textCard,
  imageSrc,
}: cardCompaniesProps) {
  let altImage = "";

  if (textCard === "BNE" || textCard === "360 ERP") {
    altImage = `Logo do ${textCard}`;
  } else {
    altImage = `Logo da ${textCard}`;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[200px] h-[200px] border-[1px] border-600 bg-gradient-3 rounded flex items-center justify-center overflow-hidden">
        <div className="w-[80%] h-[80%] flex items-center justify-center">
          <Image
            src={`/companies/${imageSrc}.png`}
            width={160}
            height={160}
            alt={altImage}
            className="object-contain"
          />
        </div>
      </div>
      <span className="text-[14px] font-light text-white-normal">
        {textCard}
      </span>
    </div>
  );
}
