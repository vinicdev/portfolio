import { ReactNode } from "react";

interface containerProps {
  children: ReactNode;
  style?: string;
}

export default function Container({ children, style }: containerProps) {
  const styleTags = `max-w-[1440px] w-full mx-auto px-20 max-md:px-4 ${style}`;
  return <section className={styleTags}>{children}</section>;
}
