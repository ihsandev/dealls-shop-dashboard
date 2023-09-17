import Link from "next/link";
import { FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 right-0 bg-white flex justify-end z-0">
      <div className="px-10 pb-1 flex items-center text-sm font-semibold">
        <FiGithub />
        <Link
          className="ml-2"
          passHref
          target="_blank"
          href="https://github.com/ihsandev/dealls-shop-dashboard"
        >
          Goto Repository
        </Link>
      </div>
    </footer>
  );
}
