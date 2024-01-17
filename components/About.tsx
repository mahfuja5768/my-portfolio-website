import SectionTitle from "./SectionTitle";

export const About = () => {
  return (
    <section 
      id="about"
      className="max-w-container mx-auto py-10 lgl:py-32 flex flex-col gap-8 text-textDark"
    >
      <SectionTitle title="About Me"></SectionTitle>
      <div className="text-center" >
        <p>
          Hey, I am
          <span className="font-semibold tracking-wide ms-2 text-white">
            Mahfuja Ahasan Muna
          </span>{" "}
          , a web developer driven by a passion to turn digital dreams into
          vibrant realities. With a personality embodying Protagonist,
          Extraverted, Intuitive, Judging, and Assertive traits, I bring a
          unique blend of leadership, creativity, and precision to my work. In
          the world of web development, I step into a natural role of leadership
          and inspiration. As a Protagonist, I thrive in collaboration, using my
          communication skills to shape abstract ideas into tangible,
          user-centric realities. Guiding projects is not just a responsibility;
          it is a passion to ensure both technical excellence and resonance with
          a broader audience.
        </p>

        <span className="text-lg font-semibold tracking-wide mr-2  pt-3 text-white">
          Skills Snapshot:
        </span>
        <ul>
          <li>
            <span className="font-semibold tracking-wide text-white">
              HTML, CSS, JavaScript:
            </span>{" "}
            Crafting immersive and responsive web experiences.
          </li>
          <li>
            <span className="font-semibold tracking-wide text-white">
              MongoDB, Firebase:
            </span>{" "}
            Building robust and scalable databases.
          </li>
          <li>
            <span className="font-semibold tracking-wide text-white">
              Node.js, Express.js:
            </span>{" "}
            Empowering the back end with efficiency.
          </li>
          <li>
            <span className="font-semibold tracking-wide text-white">React, Next.js:</span>{" "}
            Crafting dynamic and responsive front-end interfaces.
          </li>
        </ul>
      </div>
    </section>
  );
};
