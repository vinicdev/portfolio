import CardService from "../CardService";

export default function Service() {
  return (
    <section className="relative w-full min-h-[558px] h-auto my-52">
      <div
        className="absolute bottom-0 left-0 w-full h-[70%] z-0"
        style={{ backgroundImage: `var(--gradiend-3)` }}
      ></div>

      <div className="relative z-10 flex justify-center items-start h-full gap-12">
        <CardService
          title="Design intuitivo "
          icon="pensil"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          height="300"
        />

        <CardService
          title="Design intuitivo "
          icon="pensil"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          height="350"
        />

        <CardService
          title="Design intuitivo "
          icon="pensil"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          height="300"
        />
      </div>
    </section>
  );
}
