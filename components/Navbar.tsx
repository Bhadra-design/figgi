"use client";

import Image from "next/image";
import { memo } from "react";

import { navElements } from "@/constants";
import { ActiveElement, NavbarProps } from "@/types/type";
import ActiveUsers from "./users/ActiveUsers";

// import { Button } from "./ui/button";
// import ShapesMenu from "./ShapesMenu";
// import { NewThread } from "./comments/NewThread";

const Navbar = ({
  activeElement,
}: NavbarProps) => {
  

  return (
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white h-20">
      <Image src="/assets/logo.svg" alt="Figgi Logo" width={58} height={20} />
      <ActiveUsers />
    </nav>
  );
};

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
