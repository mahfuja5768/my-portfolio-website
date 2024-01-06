import q1 from "../public/assets/q1.png";
import q2 from "../public/assets/q2.png";
import q3 from "../public/assets/q3.png";
import q4 from "../public/assets/q4.png";
import q5 from "../public/assets/q5.png";
import q6 from "../public/assets/q6.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionTitle from "./SectionTitle";

const ProjectSlide = () => {
  return (
   <div>
     <SectionTitle title="Visual Projects"></SectionTitle>
      <Marquee pauseOnClick speed={20} >
    <div className="max-w-container mx-auto py-10 lgl:py-32 flex flex-col justify-center items-center gap-8">
        <div className="grid grid-cols-6 gap-2">
          <Image src={q1} alt="project1"></Image>
          <Image src={q3} alt="project1"></Image>
          <Image src={q4} alt="project1"></Image>
          <Image src={q5} alt="project1"></Image>
          <Image src={q6} alt="project1"></Image>
          <Image src={q2} alt="project1"></Image>
        </div>
    </div>
      </Marquee>
   </div>
  );
};

export default ProjectSlide;
