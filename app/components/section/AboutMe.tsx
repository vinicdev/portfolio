"use client";

import Container from "../Container";
import SmallLink from "../SmallLink";
import Title from "../Title";

export default function AboutMe() {
  return (
    <Container style="flex justify-between items-center gap-4 flex-wrap min-h-[500px] h-auto  max-md:justify-center">
      <div>
        <Title titleText="Sobre mim" />
        <div className="resize-about-text max-w-[660px] font-bold text-white-light">
          Vinicius Cardoso, 25 anos, desenvolvedor full stack.
        </div>
        <SmallLink textSmall="Falar comigo" linkSmall="/#contato" />
      </div>

      <div className="w-[45%] max-w-[577px] max-[1390px]:max-w-full max-[1390px]:w-full">
        <p className="resize-text text-gray-7 w-full ">
          Sou desenvolvedor full stack com experiência em React, Flutter,
          Node.js e atualmente estudando Ruby. Moro em Colombo-PR, sou casado
          com Larissa e adoro abraçar novos projetos que me tiram do comodismo.
          No tempo livre, sou músico, fotógrafo e videomaker.
        </p>
      </div>
    </Container>
  );
}
