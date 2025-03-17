import React from "react";

interface HeaderInterface {
  title: string;
}

export default function Headers({ title }: HeaderInterface) {
  return (
    <>
      <h2 className="">{title}</h2>
      <div className="border border-gray-900 w-full"></div>
    </>
  );
}
