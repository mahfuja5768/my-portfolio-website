import q1 from "../public/assets/q1.png";
import q2 from "../public/assets/q2.png";
import q3 from "../public/assets/q3.png";
import q4 from "../public/assets/q4.png";
import q5 from "../public/assets/q5.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SectionTitle from "./SectionTitle";

const ProjectSlide = () => {
  return (
   <div>
     <SectionTitle title="Visual Projects"></SectionTitle>
      <Marquee pauseOnClick speed={20} >
    <div className="max-w-container mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <div className="grid grid-cols-5 gap-2">
          <Image src={q2} className="h" alt="project1"></Image>
          <Image src={q1} className="h" alt="project1"></Image>
          <Image src={q3} className="h" alt="project1"></Image>
          <Image src={q4} className="h" alt="project1"></Image>
          <Image src={q5} className="h" alt="project1"></Image>
        </div>
    </div>
      </Marquee>
   </div>
  );
};

export default ProjectSlide;
