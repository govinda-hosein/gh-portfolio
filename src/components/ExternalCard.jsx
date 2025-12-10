import { motion } from "framer-motion";

const ExternalCard = ({ index, link, title, subtitle, image }) => (
  <div className="p-1 rounded-2xl bg-highlight">
    <motion.div className="bg-white p-5 rounded-2xl md:w-[440px] w-full">
      <div className="flex gap-4 items-center">
        <img
          src={image}
          alt="Image"
          className="w-16 h-16 rounded-full bg-tertiary p-4 "
        />
        <a href={link} className="text-black! hover:underline" target="_blank">
          {title} <br /> {subtitle}
        </a>
      </div>
    </motion.div>
  </div>
);

export default ExternalCard;
