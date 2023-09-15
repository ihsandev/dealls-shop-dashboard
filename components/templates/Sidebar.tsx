"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiPackage, FiShoppingCart, FiMenu, FiXCircle } from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed top-0 left-0 bottom-0 bg-slate-50 opacity-70 md:hidden transition-all",
          isOpen && "right-0"
        )}
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "md:hidden fixed text-3xl z-10 top-3 text-purple-700 transition-all",
          !isOpen ? "left-3" : "right-3"
        )}
      >
        {!isOpen && <FiMenu />}
        {isOpen && <FiXCircle />}
      </button>
      <aside
        className={cn(
          "fixed top-0 bottom-0 w-0 md:w-fit lg:w-72 bg-violet-700 text-slate-50 overflow-y-auto -ml-80 md:ml-0 transition-all",
          isOpen && "w-fit ml-0"
        )}
      >
        <nav className="mt-10 mb-4">
          <ul className="flex flex-col gap-1">
            <li className="px-2">
              <Link
                className={cn(
                  "flex items-center gap-1 border-l-4 border-l-transparent px-3 py-2 hover:bg-violet-600 rounded-sm",
                  pathname === "/" && "border-slate-50 bg-violet-600"
                )}
                href="/"
              >
                <FiPackage />
                <span>Products</span>
              </Link>
            </li>
            <li className="px-2">
              <Link
                className={cn(
                  "flex items-center gap-1 border-l-4 border-l-transparent px-3 py-2 hover:bg-violet-600 rounded-sm",
                  pathname === "/carts" && "border-slate-50 bg-violet-600"
                )}
                href="/carts"
              >
                <FiShoppingCart />
                <span>Carts</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
