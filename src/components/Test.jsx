import { motion } from "framer-motion";

const Card1 = () => {
  return (
    <>
      <motion.div
        className="bg-red-400 w-[10px] h-[10px]"
        animate={{ x: 1000 }}
      />
      <h1>yo bros</h1>
    </>
  );
};

export default Card1;
