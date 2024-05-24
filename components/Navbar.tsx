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
    <nav className="flex select-none items-center justify-between gap-4 bg-primary-black px-5 text-white max-h-[200px]">
      <Image src="/assets/logo.svg" alt="Figgi Logo" width={100} height={50} />
      <ActiveUsers />
    </nav>
  );
};

export default memo(
  Navbar,
  (prevProps, nextProps) => prevProps.activeElement === nextProps.activeElement
);
