import React from "react";

interface ExperienceInterface {
  jobTitle: string;
  company: string; // Use camelCase
  city: string; // Use camelCase
  state: string; // Use camelCase
  startDate: string;
  endDate: string;
  bulletPoints: string[];
}
export default function Experience({
  jobTitle,
  company,
  city,
  state,
  startDate,
  endDate,
  bulletPoints,
}: ExperienceInterface) {
  return (
    <>
      <div className="flex items-center justify-between mt-2 text-sm">
        <span className="flex items-center gap-2">
          <p className="font-semibold">{jobTitle || "Job Title"}</p>
          <p>
            {company || "Company"} &ndash; {city || "City"}, {state || "ST"}
          </p>
        </span>
        <p>
          {startDate || "Start Date"} &ndash; {endDate || "End Date"}
        </p>
      </div>
      <ul
        className="ml-6 list-disc [&>li]:mt-1 text-sm"
        data-type="experience-description"
      >
        {bulletPoints.map((points, index) => {
          return <li key={index}>{points}</li>;
        })}
      </ul>
    </>
  );
}
