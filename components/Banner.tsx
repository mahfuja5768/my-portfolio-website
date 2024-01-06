import { motion } from "framer-motion";
import Image from "next/image";
import myPhoto from "../public/assets/muna1.jpg";
export const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-container mx-auto py-10 mdl:py-24 flex flex-col md:flex-row-reverse justify-center items-center gap-4 lgl:gap-8 mdl:gap-10 xl:gap-4"
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Image
          src={myPhoto}
          alt="myPhoto"
          // className="rounded-full mx-auto border-4 border-textBlue p-1"
          className=""
        ></Image>
      </motion.div>
      <div>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-lg font-titleFont tracking-wide text-textDark"
        >
          Hi, I am Mahfuja Ahasan Muna
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-3xl lgl:text-4xl font-semibold font-titleFont "
        >
           Building Beautiful, Functional Web Spaces & Creating Tomorrow's Web Today.
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-base mdl:max-w-[650px] font-medium text-textDark my-5 "
        >
          Proficient in HTML, CSS, and JavaScript, I am always exploring new
          frameworks and libraries to stay at the forefront of front-end
          development trends. I am a strong advocate for clean and maintainable
          code.
        </motion.p>
        <a href="#about">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="px-5 py-3 text-[15px] border bg-textBlue border-none  rounded-full text-white hover:text-bodyColor hover:bg-textDark font-medium duration-300 me-4"
          >
            Learn More
          </motion.button>
        </a>
        <a
            href="https://drive.google.com/file/d/1P0IKSsi-cBsdy3f5A9HYXXk79795CE7u/view?usp=drive_link"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{duration: 0.5, delay: 0.5 }}
              className="px-5 py-3 text-[15px]  bg-bodyColor border-2 hover:border-textDark border-textBlue  rounded-full text-white hover:text-bodyColor hover:bg-textDark duration-300  font-medium"
            >
              Resume
            </motion.button>
          </a>
      </div>
    </section>
  );
};
