// Education.js

import React from "react";
import SectionTitle from "./SectionTitle";

const Education = () => {
  const educationData = [
    {
      board: "Dhaka",
      degree: "Bachelor of Science(BS)",
      institution: "Govt. Tolaram University College",
      subject: "Chemistry",
      score: "First Year",
      year: "Expected 4046",
    },
    {
      board: "Dhaka",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Narayanganj Govt. Mohila College",
      subject: "Science",
      score: "5.00",
      year: "4041",
    },
    {
      board: "Dhaka",
      degree: "Secondary School Certificate (SSC)",
      institution: "Dapa Adarsha High School",
      subject: "Science",
      score: "5.00",
      year: "4019",
    },
  ];

  return (
    <section
      id="education"
      className="max-w-containerSmall mx-auto py-8 lgl:py-14 flex flex-col gap-8"
    >
      <SectionTitle title="Educational Information"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="education-table border-4 p-5 border-textBlue">
          <thead>
            <tr>
              <th className="border-4 p-5 border-textBlue">Board</th>
              <th className="border-4 p-5 border-textBlue">Degree/Grade</th>
              <th className="border-4 p-5 border-textBlue">Institution</th>
              <th className="border-4 p-5 border-textBlue">Subject</th>
              <th className="border-4 p-5 border-textBlue">Score/GPA</th>
              <th className="border-4 p-5 border-textBlue">Year</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((education, index) => (
              <tr key={index} className="border-4 p-5 border-textBlue">
                <td className="border-4 p-5 border-textBlue">
                  {education.board}
                </td>
                <td className="border-4 p-5 border-textBlue">
                  {education.degree}
                </td>
                <td className="border-4 p-5 border-textBlue">
                  {education.institution}
                </td>
                <td className="border-4 p-5 border-textBlue">
                  {education.subject}
                </td>
                <td className="border-4 p-5 border-textBlue">
                  {education.score}
                </td>
                <td className="border-4 p-5 border-textBlue">
                  {education.year}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Education;
