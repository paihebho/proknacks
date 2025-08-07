import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function ListItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <Link href={href} className="group flex items-center">
        <ArrowRight className="w-4 h-4 text-gray-400 mr-3 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
          {children}
        </span>
      </Link>
    </li>
  );
}

export default ListItem;
