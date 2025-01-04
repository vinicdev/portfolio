interface titleProps {
  titleText: string;
}

export default function Title({ titleText }: titleProps) {
  return (
    <div className="flex gap-2 items-center">
      <h2 className="font-light text-[16px] text-gray-7">{titleText}</h2>

      <div className="w-[40px] h-[1px] bg-blue-light"></div>
    </div>
  );
}
