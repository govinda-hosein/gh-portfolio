import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "src/motion";

function ServiceCard({ index, title, icon }) {
  return (
    <div className="w-[200px]">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            delay: 0.1 * index,
          },
        }}
        viewport={{ once: true, amount: 1 }}
        className="w-full green-pink-gradient p-1 rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-background rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          <h6 className="text-white pt-2 text-[20px] text-center font-bold">
            {title}
          </h6>
        </div>
      </motion.div>
    </div>
  );
}

export default ServiceCard;
