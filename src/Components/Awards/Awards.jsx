import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import accordionItems from "./data.js";

const Awards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-[#E9DEFF] flex flex-col mx-2 my-8 rounded-2xl text-black/90'>
      <div className='m-8'>
        <h1 className='font-medium text-5xl my-6'>Awards</h1>
        <div className='w-full my-16 text-sm'>
          {accordionItems.map((item, index) => (
            <div key={index}>
              <button className='w-full flex justify-between items-center py-4 text-left  border border-b-black/30' onClick={() => toggleAccordion(index)}>
                <span className='my-4 text-black/90'>{item.question}</span>
                <span className='text-black/70'>{activeIndex === index ? "-" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
                    variants={{
                      open: { height: "auto" },
                      collapsed: { height: 0 },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 flex items-center justify-center leading-loose py-4 text-black/70'>{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
