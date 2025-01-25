import Container from "../Container";
import IconTech from "../IconTech";
import SmallLink from "../SmallLink";

export default function Tech() {
  return (
    <Container style="my-[200px] flex-wrap flex flex-row justify-between items-center gap-6">
      <div className="resize-about-text max-w-[660px] font-bold text-white-light">
        Trabalho com
        <span className="italic text-white-dark"> técnologias de ponta</span>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center flex-wrap gap-2">
          <IconTech pathIcon="icon-flutter" />
          <IconTech pathIcon="icon-react" />
          <IconTech pathIcon="icon-nextjs" />
          <IconTech pathIcon="icon-typescript" />
          <IconTech pathIcon="icon-angular" />
          <IconTech pathIcon="icon-dotnet" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-6">
            Atualmente algumas das principais técnologias utilizadas nos meu
            dia-dia, mas sempre estou aberto a novas tecnologias.
          </span>
          <SmallLink textSmall="Contact me" linkSmall="#" />
        </div>
      </div>
    </Container>
  );
}
