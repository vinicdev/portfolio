import Container from "../Container";
import SmallLink from "../SmallLink";
import Title from "../Title";

export default function AboutMe() {
  return (
    <Container style="flex justify-between items-center gap-4 flex-wrap min-h-[500px] h-auto  max-md:justify-center">
      <div>
        <Title titleText="Sobre mim" />
        <div className="resize-about-text max-w-[660px] font-bold text-white-light">
          Lorem Ipsum has been the industry’s
        </div>
        <SmallLink textSmall="Contact me" linkSmall="/" />
      </div>

      <div className="w-[45%] max-w-[577px] max-[1390px]:max-w-full max-[1390px]:w-full">
        <p className="resize-text text-gray-7 w-full ">
          Lorem Ipsum has been the industry s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
    </Container>
  );
}
