import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/assets/logo.png";
import Link from "next/link";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  const ref = useRef<string | any>;
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const ele = document.getElementById(targetId);
    ele?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };



  return (
    <div className="w-full shadow-2xl h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <a href="#home">
            {" "}
            <Image className="w-24" src={logo} alt="logo"></Image>
          </a>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[15px] gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                About
              </motion.li>
            </Link>
            <Link
              href="#project"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                Project
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#education"
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Education
              </motion.li>
            </Link>
            <Link
              onClick={handleScroll}
              href="#contact"
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <a
            href="https://drive.google.com/file/d/1TAjT6e_KvXfJmLiijkBSXdcNoUwGlSOW/view?usp=drive_link"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        {/* icon */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 mdl:hidden flex items-center justify-center flex-col text-4xl text-textBlue cursor-pointer overflow-hidden group gap-1"
        >
          <span className="w-full h-[2px] bg-textBlue inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textBlue inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textBlue inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full bg-[#112240]  overflow-y-scroll scrollbarHide flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textBlue  hover:text-red-500 absolute cursor-pointer right-4 top-4"
              ></MdOutlineClose>
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="#project"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Project
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#education"
                    className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Education
                    </motion.li>
                  </Link>
                  <Link
                    onClick={handleScroll}
                    href="#contact"
                    className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1TAjT6e_KvXfJmLiijkBSXdcNoUwGlSOW/view?usp=drive_link"
                  target="_blank"
                >
                  <motion.button
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="flex gap-5 mdl:text-3xl text-2xl text-textBlue">
                  <a
                    className="hover:animate-bounce"
                    href="https://www.linkedin.com/in/ahasanmuna/"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>
                  <a
                    className="hover:animate-bounce"
                    href="https://github.com/mahfuja5768"
                  >
                    {" "}
                    <FaGithub></FaGithub>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
