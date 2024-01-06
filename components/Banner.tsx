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
          className="text-lg font-titleFont tracking-wide text-textBlue"
        >
          Hi, I am Mahfuja Ahasan Muna
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-3xl lgl:text-4xl font-semibold font-titleFont "
        >
          Enhancing Moments with Code: Meet{" "}
          <span className="my-2 inline-flex text-textBlue">
            Mahfuja Ahasan Muna,
          </span>{" "}
          the Exceptional Web Developer.
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
            className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300"
          >
            Learn More
          </motion.button>
        </a>
      </div>
    </section>
  );
};
