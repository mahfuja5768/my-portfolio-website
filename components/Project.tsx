import Image from "next/image";
import SectionTitle from "./SectionTitle";
import p1 from "../public/assets/p1.png";
import p2 from "../public/assets/p2.png";
import p3 from "../public/assets/p3.png";
import p4 from "../public/assets/p4.png";
import p5 from "../public/assets/p5.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <section id="project" className="max-w-container mx-auto py-10 mdl:py-24">
      <SectionTitle title="My Projects"></SectionTitle>
      <div className="my-12 grid grid-cols-1 mdl:grid-cols-2 gap-8">
        <div className="border-2 rounded-2xl border-textBlue">
          <Image className="h-72  rounded-t-2xl" src={p1} alt="" />
          <div className="my-5  p-5">
            <h2 className="text-3xl font-medium mb-3">
              <span className="text-textBlue">Dream Property</span>{" "}
            </h2>

            <p className="text-textDark text-justify">
              <span className="text-textBlue font-bold mr-2">
                About project:
              </span>
              The homepage features a navbar, advertisement, user navbar, latest
              reviews, and a footer, with routes for properties, dashboard, and
              login. Logged-in users can easily access and interact with
              properties, add reviews, manage their dashboard, wishlist, and
              make purchases. Agents add properties, handle user requests, and
              monitor sold properties. Administrators oversee reviews, user
              accounts, and property requests, making this project a
              comprehensive learning experience in web development.
            </p>
            <h3 className="text-xl font-medium my-3">
              <span className=" text-textBlue"> Technologies: </span> React,
              Node js, Express js, Tailwind, Material Ui, Firebase, Jwt
            </h3>
            <div className=" my-4 flex justify-start  gap-3 ">
              <a href="https://dream-property.netlify.app" target="_blank">
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Live Preview{" "}
                  <span>
                    <FaExternalLinkAlt />
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/mahfuja5768/Dream-property-Client"
                target="_blank"
              >
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Github Repo{" "}
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-2xl border-textBlue">
          <Image className="h-72 rounded-t-2xl" src={p2} alt="" />
          <div className="my-5 p-5">
            <h2 className="text-3xl font-medium mb-3">
              <span className="text-textBlue">Vogue-Verse-Apparel</span>{" "}
            </h2>

            <p className="text-textDark text-justify">
              <span className="text-textBlue font-bold mr-2">
                About project:
              </span>
              The homepage showcases a banner, navbar, about us, brands, happy
              customer section, FAQs, and a footer. The navbar facilitates
              navigation with options like brands, add product, cart, FAQ,
              register, and user-related features. Brands section displays 6
              brand types; clicking a brand card directs users to the brands
              products page with a slider and selected brand products. Products
              are presented in cards on the products page, with buttons for
              details and updates. User interactions like product updates and
              cart additions prompt login or registration. The my cart page
              displays added products with a delete option for each.
            </p>
            <h3 className="text-xl font-medium my-3">
              <span className=" text-textBlue"> Technologies: </span> React,
              Tailwind, Firebase
            </h3>
            <div className=" my-4 flex justify-start  gap-3 ">
              <a
                href="https://vogue-verse-apparel-client.vercel.app"
                target="_blank"
              >
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Live Preview{" "}
                  <span>
                    <FaExternalLinkAlt />
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/mahfuja5768/Vogue-Verse-Apparel-Client"
                target="_blank"
              >
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Github Repo{" "}
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-textBlue">
          <Image className="h-72 rounded-t-2xl" src={p3} alt="" />
          <div className="my-5 p-5">
            <h2 className="text-3xl font-medium mb-3">
              <span className="text-textBlue">Foodie Pal</span>{" "}
            </h2>

            <p className="text-textDark text-justify">
              <span className="text-textBlue font-bold mr-2">
                About project:
              </span>
              The homepage features a navbar with Framer Motion, a banner, top
              foods, and a footer. Users, when logged in, can add, purchase,
              update, and delete food items via the navbar. The all foods page
              displays categorized foods, and on the details page, users can
              order and add items to their added-food section, where they manage
              purchases, additions, updates, and deletions.
            </p>
            <h3 className="text-xl font-medium my-3">
              <span className=" text-textBlue"> Technologies: </span> React,
              Node js, Express js, Tailwind, Material Ui, Firebase, Jwt
            </h3>
            <div className=" my-4 flex justify-start  gap-3 ">
              <a href="https://foodie-pal-client.vercel.app/" target="_blank">
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Live Preview{" "}
                  <span>
                    <FaExternalLinkAlt />
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/mahfuja5768/Foodipal-client"
                target="_blank"
              >
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Github Repo{" "}
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl border-textBlue">
          <Image className="h-72 rounded-t-2xl" src={p4} alt="" />
          <div className="my-5 p-5">
            <h2 className="text-3xl font-medium mb-3">
              <span className="text-textBlue">Mindful-Moments</span>{" "}
            </h2>

            <p className="text-textDark text-justify">
              <span className="text-textBlue font-bold mr-2">
                About project:
              </span>
              Mindful Moments, a MERN stack blog website, allows users to
              seamlessly store, manage, and interact with blog data, offering
              features like adding, deleting blogs, posting reviews, and
              creating user accounts, all backed by MongoDB.
            </p>
            <h3 className="text-xl font-medium my-3">
              <span className=" text-textBlue"> Technologies: </span> Node.js,
              JWT , MongoDB, NPM, Router ,React.js, Express.js, , Tailwind,
              Firebase
            </h3>
            <div className=" my-4 flex justify-start  gap-3 ">
              <a href="https://mindful-moments-a.netlify.app" target="_blank">
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Live Preview{" "}
                  <span>
                    <FaExternalLinkAlt />
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/mahfuja5768/Mindful-Moments-Client"
                target="_blank"
              >
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Github Repo{" "}
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-2xl border-textBlue">
          <Image className="h-72 rounded-t-2xl" src={p5} alt="" />
          <div className="my-5 p-5">
            <h2 className="text-3xl font-medium mb-3">
              <span className="text-textBlue">Music-Amplitudein</span>{" "}
            </h2>

            <p className="text-textDark text-justify">
              <span className="text-textBlue font-bold mr-2">
                About project:
              </span>
              The music show ticket counter facilitates ticket purchases,
              allowing buyers to acquire tickets, while administrators have the
              capability to add new shows to the platform, enhancing the overall
              user experience.
            </p>
            <h3 className="text-xl font-medium my-3">
              <span className=" text-textBlue"> Technologies: </span> Node.js,
              JWT , MongoDB, NPM, Router ,React.js, Express.js, , Tailwind,
              Firebase
            </h3>
            <div className=" my-4 flex justify-start  gap-3 ">
              <a href="https://music-amplitudein.netlify.app" target="_blank">
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Live Preview{" "}
                  <span>
                    <FaExternalLinkAlt />
                  </span>
                </button>
              </a>
              <a
                href="https://github.com/mahfuja5768/Music-Amplitudein-client/blob/main"
                target="_blank"
              >
                <button className="px-2 py-2 rounded-md text-textBlue text-[15px] border border-textBlue hover:bg-hoverColor duration-300 flex items-center gap-2">
                  Github Repo{" "}
                  <span>
                    <FaGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
