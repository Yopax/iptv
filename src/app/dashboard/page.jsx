"use client";
import { motion } from "framer-motion";
import React from "react";

function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>dasboard</div>
      </motion.div>
    </>
  );
}

export default page;
