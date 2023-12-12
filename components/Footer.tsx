import Image from "next/image";
import logo from "../public/assets/logo.png";
import { FaArrowUp, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-containerSmall mx-auto pt-10 lgl:pt-12 flex flex-col gap-8">
      <div className="flex items-center mdl:flex-row flex-col-reverse pb-4 justify-between border-b-2 border-textBlue">
        <div className="flex items-center ">
          <Image className="w-24" src={logo} alt="logo"></Image> 
          <span className="my-2 inline-flex text-textBlue mdl:text-2xl">Mahfuja Ahasan Muna</span>
        </div>
        <div className="flex gap-5 mdl:text-3xl text-2xl text-textBlue">
          <a
            className="hover:animate-bounce"
            href="https://www.linkedin.com/in/ahasanmuna/"  target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            className="hover:animate-bounce"
            href="https://github.com/mahfuja5768" target="_blank"
          >
            {" "}
            <FaGithub></FaGithub>
          </a>
          
        </div>
      </div>
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <div className="mdl:inline-flex items-center  gap-7">
          <ul className="grid grid-cols-3 mdl:grid-cols-5 text-[15px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <li
              >
                Home
              </li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <li
              >
                About
              </li>
            </Link>
            <Link
              href="#project"
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <li
              >
                Project
              </li>
            </Link>
            <Link
              href="#education"
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <li
              >
                Education
              </li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textBlue hover:text-textDark cursor-pointer duration-300 nav-link"
            >
              <li
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 text-textDark">
        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved | This website made by Next Js</p>
      </div>
    </div>
  );
};

export default Footer;
