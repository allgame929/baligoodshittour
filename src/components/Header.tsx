import Link from "next/link";
import { site } from "@/data/site";

export function Header() {
  return (
    <header className="header">
      <div className="wrap header__row">
        <Link href="/" className="brand">
          {site.name}
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/#tours">Tours</Link>
          <Link href="/#about">About</Link>
          <Link href="/#how">How it works</Link>
          <Link href="/#faq">Questions</Link>
          <Link href="/#contact" className="btn btn--sun btn--small">
            Ask for a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
