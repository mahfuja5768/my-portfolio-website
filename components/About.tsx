import SectionTitle from "./SectionTitle";

export const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me"></SectionTitle>
      <div className="text-justify">
        <p>
          Hey, I am 
          <span className="font-semibold tracking-wide ms-1 text-textBlue">
            Mahfuja Ahasan Muna
          </span>{" "}
          , a web developer driven by a passion to turn digital dreams into
          vibrant realities. With a personality embodying Protagonist,
          Extraverted, Intuitive, Judging, and Assertive traits, I bring a
          unique blend of leadership, creativity, and precision to my work.
        </p>
        <p className="my-2 ">
          {" "}
          <span className="text-lg font-semibold tracking-wide mr-2 text-textBlue">
            Protagonist at Heart:
          </span>
          In the world of web development, I step into a natural role of
          leadership and inspiration. As a Protagonist, I thrive in
          collaboration, using my communication skills to shape abstract ideas
          into tangible, user-centric realities. Guiding projects is not just a
          responsibility; it is a passion to ensure both technical excellence and
          resonance with a broader audience.
        </p>
        <p className="my-2 ">
          {" "}
          <span className="text-lg font-semibold tracking-wide mr-2 text-textBlue">
            Extraverted Energizer:
          </span>
          Infused with an Extraverted spirit, I breathe life into projects
          through genuine connections. Beyond the code, I build relationships
          and uncover the unique stories each project holds. Collaboration
          thrives in an environment where every team members voice is valued,
          and this energizing approach enhances the creative process.
        </p>
        <p className="my-2 ">
          {" "}
          <span className="text-lg font-semibold tracking-wide mr-2 text-textBlue">
            Assertive Innovator:
          </span>
          Fueled by assertiveness, challenges are not roadblocks but
          opportunities for innovation. I confront them head-on, pushing the
          boundaries of what is achievable in web development. Assertiveness
          propels projects forward, not just meeting but exceeding expectations.
        </p>
          <span className="text-lg font-semibold tracking-wide mr-2 text-textBlue">
            Skills Snapshot:
          </span>
          <ul>
            <li>
              <span className="font-semibold tracking-wide">
                HTML, CSS, JavaScript:
              </span>{" "}
              Crafting immersive and responsive web experiences.
            </li>
            <li>
              <span className="font-semibold tracking-wide">
                MongoDB, Firebase:
              </span>{" "}
              Building robust and scalable databases.
            </li>
            <li>
              <span className="font-semibold tracking-wide">
                Node.js, Express.js:
              </span>{" "}
              Empowering the back end with efficiency.
            </li>
            <li>
              <span className="font-semibold tracking-wide">
                React, Next.js:
              </span>{" "}
              Crafting dynamic and responsive front-end interfaces.
            </li>
          </ul>
      </div>
    </section>
  );
};
