import React from "react";
import { motion } from "framer-motion";

function TechnologyIcon({ technology, index }) {
  return (
    <motion.div className="flex flex-col items-center gap-1">
      <img
        src={technology.icon}
        title={technology.name}
        className="!h-20 !w-20 p-2 bg-white !rounded-full"
        alt=""
      />
      <p>{technology.name}</p>
    </motion.div>
  );
}

export default TechnologyIcon;
