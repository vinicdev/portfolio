import { ReactNode } from "react";

interface containerProps {
  children: ReactNode;
  style?: string;
  id?: string;
}

export default function Container({ children, style, id }: containerProps) {
  const styleTags = `max-w-[1440px] w-full mx-auto px-20 max-md:px-4 ${style}`;
  return (
    <section className={styleTags} id={id}>
      {children}
    </section>
  );
}
