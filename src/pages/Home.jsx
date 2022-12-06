import React from "react";
import Stats from "../components/Stats";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.div
      className="vh-100"
      initial={{ opacity: 0, x: "-100px", filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      <Stats></Stats>
    </motion.div>
  );
}
