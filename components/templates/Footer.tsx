import Link from "next/link";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 right-0 flex justify-end z-0">
      <div className="px-10 bg-violet-700 py-1 text-white rounded-tl-lg flex items-center text-sm font-semibold">
        <FiGithub />
        <Link
          className="ml-2"
          passHref
          target="_blank"
          href="https://github.com/ihsandev/dealls-shop-dashboard"
        >
          Goto Repo
        </Link>
      </div>
    </footer>
  );
}
