import React from "react";

interface PsInterface {
  summary: string;
}
export default function ProfessionalSummary({ summary }: PsInterface) {
  return <p className="text-sm leading-5 mt-2">{summary}</p>;
}
