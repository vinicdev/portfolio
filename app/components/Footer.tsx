import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-black-dark text-gray-6 py-8">
      <Container style="flex flex-col gap-4 items-center text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Meu Portfólio. Todos os direitos
          reservados.
        </p>
        <p className="text-xs text-gray-7">
          Desenvolvido com Next.js, TypeScript e Tailwind — inspirado no estilo
          do site.
        </p>
      </Container>
    </footer>
  );
}
