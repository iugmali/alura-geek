import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/" passHref>
        <a>
          <img
            src="/img/Logo.png"
            alt="Logo Alura-Geek"
          />
        </a>
      </Link>
    </div>
  );
};