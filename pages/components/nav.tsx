import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 py-2 px-2 flex justify-center">
      <div className="lg:w-2/3 flex items-center justify-between">
        <Link href="/">
          <h1>Next Data TS</h1>
        </Link>
        <div className="flex space-x-4">
          <Link href="/apis">Free APIs</Link>
        </div>
      </div>
    </nav>
  );
}
