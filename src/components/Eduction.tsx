import React from "react";

interface EducationInterface {
  school: string;
  degree: string;
  credential: string;
  graduation: string;
}
export default function Eduction({
  school,
  degree,
  credential,
  graduation,
}: EducationInterface) {
  return (
    <>
      <div className="flex items-center justify-between mt-2 text-sm">
        <span className="flex items-center gap-2">
          <p className="font-semibold">{school || "School"},</p>
          <p>{credential || "credential"} in</p>
          <p>{degree || "degree"}</p>
        </span>
        <p>{graduation || "End Date"}</p>
      </div>
    </>
  );
}
