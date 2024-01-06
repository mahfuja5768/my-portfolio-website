import React from "react";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  return (
    <div className="max-w-container mx-auto py-10 mdl:py-24">
      <SectionTitle title="My Skills"></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-12">
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">React JS</h4>
            <span className="text-2xl font-bold text-white">90 %</span>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full"
          ></div>
        </div>
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">Next JS</h4>
            <span className="text-2xl font-bold text-white">80 %</span>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full"
          ></div>
        </div>
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">Node JS</h4>
            <span className="text-2xl font-bold text-white">80 %</span>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full"
          ></div>
        </div>
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">Express Js</h4>
            <span className="text-2xl font-bold text-white">80 %</span>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full"
          ></div>
        </div>
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">Mongo Db</h4>
            <span className="text-2xl font-bold text-white">80 %</span>
          </div>
          <div
            style={{ width: "90%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full"
          ></div>
        </div>
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">Javascript</h4>
            <span className="text-2xl font-bold text-white">80 %</span>
          </div>
          <div
            style={{ width: "80%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full"
          ></div>
        </div>
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">HTML5</h4>
            <span className="text-2xl font-bold text-white">95 %</span>
          </div>
          <div
            style={{ width: "95%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full"
          ></div>
        </div>
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">CSS3</h4>
            <span className="text-2xl font-bold text-white">95 %</span>
          </div>
          <div
            style={{ width: "95%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full "
          ></div>
        </div>
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">Firebase</h4>
            <span className="text-2xl font-bold text-white">75 %</span>
          </div>
          <div
            style={{ width: "75%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full"
          ></div>
        </div>
        <div className="border-2 rounded shadow-2xl bg-transference border-textLight">
          <div className="flex justify-between items-center px-4 lg:px-8 py-5">
            <h4 className="text-2xl font-bold text-white">Git</h4>
            <span className="text-2xl font-bold text-white">80 %</span>
          </div>
          <div
            style={{ width: "80%" }}
            className="bg-textLight lg:h-3 h-2 rounded-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
