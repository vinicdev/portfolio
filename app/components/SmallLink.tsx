import Link from "next/link";

interface smalLinksProps {
  textSmall: string;
  linkSmall: string;
}

export default function SmallLink({ textSmall, linkSmall }: smalLinksProps) {
  return (
    <Link href={linkSmall || "/"} className="flex items-center gap-1">
      <small className="text-[14px] text-blue-light">{textSmall}</small>

      <div className="icon-arrow w-[15px] h-[15px]"></div>
    </Link>
  );
}
