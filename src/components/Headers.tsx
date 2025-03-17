import React from "react";

interface HeaderInterface {
  title: string;
}

export default function Headers({ title }: HeaderInterface) {
  return (
    <h2 className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0">
      {title}
    </h2>
  );
}
