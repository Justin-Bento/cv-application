import React from "react";

export default function page() {
  return (
    <main className="grid grid-cols-12 gap-4">
      <section className="bg-gray-200 w-full min-h-dvh col-span-3">
        <p className="opacity-0">hellp</p>
      </section>
      <section className="bg-gray-200 w-full min-h-dvh col-span-9 pt-24">
        <div className="relative max-w-[100ch] mx-auto bg-white min-h-dvh border-2 border-gray-400 rounded-lg p-12">
          <div className="space-y-2" datatype="resume-header">
            <h1 className="text-4xl">Person Name</h1>
            <ul className="flex items-center divide-x-2 divide-gray-900">
              <li className="px-2">647-464-0303</li>
              <li className="px-2">647-464-0303</li>
              <li className="px-2">example.name@gmail.com</li>
              <li className="px-2">wwww.person-name.com</li>
              <li className="px-2">github.com/personName</li>
            </ul>
          </div>
          {/* 
            End of Resume Header
          */}
          <section className="">
            <h2 className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0">
              Skills
            </h2>
          </section>
        </div>
      </section>
    </main>
  );
}
