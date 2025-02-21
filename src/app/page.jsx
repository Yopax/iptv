"use client";
import Login from "@/components/Login";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Login />
      </motion.div>
    </>
  );
}
