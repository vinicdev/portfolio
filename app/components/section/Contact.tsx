import Container from "../Container";
import Title from "../Title";

const contactItems = [
  {
    label: "WhatsApp",
    value: "+55 (41) 99830-4073",
    link: "https://wa.me/5541998304073",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vinicdev",
    link: "https://www.linkedin.com/in/vinicdev/",
  },
  {
    label: "GitHub",
    value: "github.com/vinicdev",
    link: "https://github.com/vinicdev",
  },
  {
    label: "Email",
    value: "contato@viniciuscardoso.dev",
    link: "mailto:contato@viniciuscardoso.dev",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-black-normal py-16">
      <Container style="flex flex-col gap-8">
        <Title titleText="Contato" />

        <p className="max-w-2xl text-gray-7">
          Estou disponível para novos projetos e parcerias. Escolha uma forma de
          contato abaixo e vamos conversar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-gray-5 bg-black-dark p-4 transition hover:border-blue-light hover:bg-[#0f172a]"
            >
              <div className="text-gray-7 text-xs uppercase tracking-wider">
                {item.label}
              </div>
              <div className="mt-2 text-white-light font-semibold">
                {item.value}
              </div>
            </a>
          ))}
        </div>

        <div>
          <a
            href="https://wa.me/5541998304073"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg border border-blue-light px-5 py-2 text-blue-light transition hover:bg-blue-light hover:text-black-dark"
          >
            Enviar mensagem pelo WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
