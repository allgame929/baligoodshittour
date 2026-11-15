import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="wrap wrap--narrow">
          <h1 className="h2">This page does not exist</h1>
          <p>The tour may have been renamed. See all current tours instead.</p>
          <p>
            <Link href="/#tours" className="btn btn--ink">
              See all tours
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
