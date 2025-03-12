/* eslint-disable react/prop-types */
import { easeInOut, motion } from "framer-motion";
import { CalendarFold, Link, ArrowUpRight } from "lucide-react";

function EventListCard(props) {
  const { name, desc, dates, link, index } = props;
  return (
    <motion.div
      initial={{
        y: 300,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration:index === 0 ? 0.5 : index * .8 % 2,
        ease: easeInOut,
      }}
      className="w-full h-[88vh] bg-cover bg-center border border-gray-400/50  flex flex-col justify-between"
    >
      <div>
        <div className="bg-gray-500 w-full h-[55vh]"></div>
        <div className="p-2">
          <h1 className="text-2xl">{name}</h1>
          <h1 className="text-gray-400">{desc}</h1>
        </div>
      </div>
      <div className="p-2">
        <div className="flex flex-row items-center gap-2 my-1">
          <CalendarFold size={"20"} color="gray" />
          <h1 className="">{dates}</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Link size={"20"} color="gray" />
          <div className="flex items-end">
            <a href={link}>
              <h1 className="hover:text-[#EC74FF]">register now</h1>
            </a>
            <ArrowUpRight size={18} color="#EC74FF"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EventListCard;
