import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center pt-[90px] relative min-h-screen">
      <p className="flex gap-2 subtitle-resize text-[var(--gray-7)]">
        👋, meu nome é
        <span className="font-bold text-[var(--blue-dark)]">Vinicius</span> e eu
        sou freelancer
      </p>

      <h1 className="mt-[12px] title-risize text-[var(--white-normal)] font-bold flex flex-col items-center gap-4">
        <span>FRONT-END</span>
        <span className="text-transparent text-stroke">& UI DESIGN</span>
      </h1>

      <Image
        width={550}
        height={200}
        alt="Desenvolvedor front-end vinicius cardoso"
        src="/desenvolvedor-vinicius-cardoso.png"
        className="absolute image-resize"
      />
    </header>
  );
}
