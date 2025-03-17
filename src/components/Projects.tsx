import React from "react";

interface projectInterface {
  projectName: string;
  githubCode: string;
  liveDemo: string;
  projectSummary: string;
}

export default function Projects({
  projectName,
  githubCode,
  liveDemo,
  projectSummary,
}: projectInterface) {
  return (
    <>
      <div className="flex items-center justify-between mt-2 text-sm">
        <p className="font-semibold">{projectName || "Project Name"}</p>
        <span className="flex items-center gap-2">
          <p>{githubCode}</p>
          <p>{liveDemo}</p>
        </span>
      </div>
      <ul
        className="ml-6 list-disc [&>li]:mt-1 text-sm"
        data-type="experience-description"
      >
        <li>{projectSummary}</li>
      </ul>
    </>
  );
}
