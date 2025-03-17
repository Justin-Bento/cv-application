import React from "react";

interface ProfessionalSkillsProps {
  specializations: string;
  highlights: string[];
}

export default function ProfessionalSkills({
  specializations,
  highlights,
}: ProfessionalSkillsProps) {
  return (
    <div className="flex items-center text-sm">
      <p className="font-bold">{specializations}</p>
      <ul className="flex items-center gap-2 ml-2">
        {highlights.map((highlight, index) => (
          <li key={index}>
            {highlight}
            {index < highlights.length - 1 && ","}{" "}
            {/* Add comma except for the last item */}
          </li>
        ))}
      </ul>
    </div>
  );
}
