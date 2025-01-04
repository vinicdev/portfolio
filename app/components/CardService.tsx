interface cardProps {
  title: string;
  icon: string;
  text: string;
  height: string;
}

export default function CardService({ title, icon, text, height }: cardProps) {
  return (
    <div
      className={`w-[300px] p-4 rounded-lg bg-400 flex flex-col items-center box-shadow `}
      style={{ height: `${height}px` }}
    >
      {icon}

      <h3 className="text-[24px] text-white-light font-semibold">{title}</h3>

      <span
        className="text-[16px] text-gray-7
      "
      >
        {text}
      </span>
    </div>
  );
}
