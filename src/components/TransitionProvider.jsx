"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  const convertPathName = {
    "/": "Home",
    "/about": "About",
    "/portfolio": "Portfolio",
    "/contact": "Contact",
  };

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-100 h-100 bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {convertPathName[pathName]}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-20">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-5rem)]">
          <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
