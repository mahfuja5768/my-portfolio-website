import { motion } from "framer-motion";
import { FaMailchimp, FaPaperPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import SectionTitle from "./SectionTitle";
const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="max-w-container mx-auto py-10 mdl:py-24 flex flex-col justify-center items-center gap-4 lgl:gap-8 mdl:gap-10 xl:gap-4 text-center"
      >
        {" "}
        <h3 className="text-lg font-titleFont tracking-wide text-textBlue">
          Get In Touch
        </h3>
        <SectionTitle title="Contact Me"></SectionTitle>
        <p className="text-base mdl:max-w-[650px] font-medium text-textDark ">
          If you are looking for a web developer who is passionate about creating
          beautiful, functional websites, then I am the perfect fit for you. I am
          always eager to learn new technologies and techniques, and I am
          confident that I can help you create the perfect website for your
          business.
        </p>
        <a href="mailto:mahfujaahsanmuna@gmail.com">
          <button className="px-4 py-2 rounded-md flex gap-2 items-center text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300">
            <span className="">
              <IoMdMail></IoMdMail>
            </span>
            Send Mail{" "}
            <span className="animate-pulse">
              <FaPaperPlane></FaPaperPlane>
            </span>
          </button>
        </a>
      </section>
    </div>
  );
};

export default Contact;
