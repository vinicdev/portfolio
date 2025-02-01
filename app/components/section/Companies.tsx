import CardCompanies from "../CardCompanies";
import Container from "../Container";
import Title from "../Title";

export default function Companies() {
  return (
    <Container style="flex flex-col gap-6 mb-[200px] max-sm:mb-40">
      <Title titleText="Empresas" />

      <div className="flex flex-col gap-20">
        <div className="resize-about-text w-full text-center font-bold text-white-light">
          Empresa que
          <span className="italic text-400"> confiaram </span>
          em meu serviço
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <CardCompanies textCard="Solvis" imageSrc="solvis" />
          <CardCompanies textCard="BNE" imageSrc="bne" />
          <CardCompanies textCard="Harpia Tech" imageSrc="harpia" />
          <CardCompanies textCard="360 ERP" imageSrc="360" />
          <CardCompanies textCard="Tex4" imageSrc="tex4" />
        </div>
      </div>
    </Container>
  );
}
