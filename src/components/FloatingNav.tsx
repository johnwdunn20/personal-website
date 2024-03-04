"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[] = [
    {
      name: 'Open Source',
      link: '#open-source',
    },
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        // **Added hidden sm:flex to hide on mobile. Right now, it tries to display icons that don't exist. May be able to just remove the icons altogether so that it always displays text
        className={cn(
          "hidden sm:flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-slate-900 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-4 pl-4 py-2  items-center justify-center space-x-4 bg-opacity-70",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
            <button className="border text-sm font-medium relative border-white/[0.2] text-slate-900 hover:text-black px-4 py-2 rounded-full gradient-non-hover gradient-hover">
              <a
                key={idx}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 "
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </a>
          </button>
            
        ))}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav