import React from 'react';

const education = [
  {
    institution: "Swami Keshvanand Institute of Technology Management & Gramothan Jaipur",
    degree: "Computer Science and Engineering",
    period: "2019 - 2023",
    score: "CGPA: 8.59"
  },
  {
    institution: "Disha Delpi Global Senior Secondary School Kota",
    degree: "RBSE (Class XII)",
    period: "2017 - 2018",
    score: "Aggregate: 85.00%"
  },
  {
    institution: "BS Memorial School Aburoad(sirohi)",
    degree: "CBSE (Class X)",
    period: "2015 - 2016",
    score: "Aggregate: 95.00%"
  }
];

export default function Education() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-900">{edu.institution}</h3>
              <p className="text-lg text-gray-700">{edu.degree}</p>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>{edu.period}</span>
                <span>{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}