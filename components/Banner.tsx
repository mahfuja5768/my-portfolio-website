/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";
import myPhoto from "/public/assets/muna.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export const Banner = () => {
  return (
    <section
      id="home"
      className="relative max-w-container mx-auto  flex md:h-[50vh] flex-col-reverse md:flex-row-reverse gap-12 justify-center items-center lgl:gap-12 mdl:gap-12 xl:gap-4"
    >
      <motion.div
        className=" bg-textBlue pb-12 w-3/4 py-5 lg:py-0 lg:w-2/5 h-[30vh] relative flex flex-col justify-center items-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Image
          className=" lg:absolute -top-12 lg:w-[250px] lg:h-[250px] w-[200px] h-[200px] rounded-full "
          src={myPhoto}
          alt="myPhoto"
        ></Image>
        <div className="flex justify-center items-center flex-col">
          {/* <h3 className=" text-bodyColor text-center lg:text-2xl mt-3 font-bold">
            Mahfuja Ahasan Muna
          </h3> */}
          <div className="flex gap-5 mdl:text-3xl text-2xl text-bodyColor justify-center pt-6">
            <a
              className="hover:animate-bounce"
              href="https://www.linkedin.com/in/ahasanmuna/"
              target="_blank"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              className="hover:animate-bounce"
              href="https://github.com/mahfuja5768"
              target="_blank"
            >
              {" "}
              <FaGithub></FaGithub>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="w-3/4">
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
          className="text-3xl lgl:text-4xl font-semibold mx-auto font-titleFont "
        >
          Building Beautiful, Functional Web Spaces & Creating Tomorrow's Web
          Today.
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-base mdl:max-w-[650px] font-medium  text-textDark my-5 "
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
            className="px-5 py-3 text-[15px] border-2 hover:bg-transparent hover:text-textBlue hover:border-textBlue   rounded-full text-black hover:text-primary bg-textDark font-medium duration-300 me-4"
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
            transition={{ duration: 0.5, delay: 0.5 }}
            className="px-5 py-3 text-[15px]  bg-bodyColor border-2 hover:border-textDark border-textBlue  rounded-full text-primary hover:text-bodyColor hover:bg-textDark duration-300  font-medium"
          >
            Resume
          </motion.button>
        </a>
      </div>
      {/* <div className="">
        <svg
          className=" rotate-180 absolute bottom-0 right-0 left-0 z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(134, 182, 246)"
            fillOpacity="1"
            d="M0,192L60,213.3C120,235,240,277,360,250.7C480,224,600,128,720,117.3C840,107,960,181,1080,181.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
    //     <section className="w-full flex justify-between">
    //       <div className="bg-green-500 w-full">
    // r
    //       </div>
    //       <div className="bg-textBlue w-full">
    // r
    //       </div>
    //     </section>
  );
};
