"use client";

// import { useState } from "react";
// import Button from "../Button";
import CardService from "../CardService";

export default function Service() {
  // const [moreService, setMoreService] = useState<boolean>(false);

  // const OpenMoreServices = () => {
  //   setMoreService(!moreService);
  // };

  return (
    <section className="relative w-full min-h-[558px] h-auto my-52">
      <div
        className="absolute bottom-0 left-0 w-full h-[80%] z-0"
        style={{ backgroundImage: `var(--gradiend-3)` }}
      ></div>

      <div className="flex flex-col items-center gap-12 mb-6">
        <div className="relative z-10 h-full gap-12 flex flex-col items-center px-4 max-w-[1440px]">
          <div className=" flex flex-wrap justify-center items-end gap-12">
            <CardService
              title="Design intuitivo "
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              height="300"
            >
              <div
                style={{ backgroundImage: "url(./free_pen.svg)" }}
                className="w-[60px] h-[60px] bg-no-repeat"
              />
            </CardService>

            <CardService
              title="Design intuitivo "
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              height="350"
            >
              <div
                style={{ backgroundImage: "url(./computer.svg)" }}
                className="w-[60px] h-[60px] bg-no-repeat"
              />
            </CardService>

            <CardService
              title="Design intuitivo "
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              height="300"
            >
              <div
                style={{ backgroundImage: "url(./world-search.svg)" }}
                className="w-[60px] h-[60px] bg-no-repeat"
              />
            </CardService>
          </div>

          {/* {moreService && (
            <div className="flex flex-wrap justify-center items-start gap-12">
              <CardService
                title="Design intuitivo "
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                height="300"
              >
                <div
                  style={{ backgroundImage: "url(./free_pen.svg)" }}
                  className="w-[60px] h-[60px] bg-no-repeat"
                />
              </CardService>

              <CardService
                title="Design intuitivo "
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                height="350"
              >
                <div
                  style={{ backgroundImage: "url(./computer.svg)" }}
                  className="w-[60px] h-[60px] bg-no-repeat"
                />
              </CardService>

              <CardService
                title="Design intuitivo "
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                height="300"
              >
                <div
                  style={{ backgroundImage: "url(./world-search.svg)" }}
                  className="w-[60px] h-[60px] bg-no-repeat"
                />
              </CardService>
            </div>
          )} */}
        </div>

        {/* Botão ver mais serviços */}
        {/* <Button onClick={OpenMoreServices}>
          {moreService ? "Ver menos" : "Ver todos serviços "}
        </Button> */}
      </div>
    </section>
  );
}
