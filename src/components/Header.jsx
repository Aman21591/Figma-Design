import Image from "next/image";

import Container from "./Container";

export default function Header() {
  return (
    <header className="p-4 pb-32 bg-primary-blue">
      <Container className="flex flex-row items-center justify-between gap-4 flex-wrap">
        <Image
          src="/logo.svg"
          alt="logo"
          width={156 * 0.75}
          height={44 * 0.75}
        />

        <nav className="flex flex-row items-center justify-end gap-8">
          <a href="#" className="text-white">
            Sign In
          </a>
          <a href="#" className="rounded px-4 py-2 bg-white text-primary-blue">
            Dukaan for PC
          </a>
        </nav>
      </Container>
    </header>
  );
}
