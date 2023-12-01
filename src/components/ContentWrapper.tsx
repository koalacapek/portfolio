import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function ContentWrapper({ children }: { children: React.ReactNode }) {
  // You can add any logic or styling you want here
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-screen">
        <Navbar />
        {children}
      </div>
    </motion.div>
  );
}

export default ContentWrapper;
