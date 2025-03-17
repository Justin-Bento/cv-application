import React from "react";

export default function page() {
  return (
    <main className="grid grid-cols-12 gap-4">
      <section className="bg-gray-200 w-full min-h-dvh col-span-3">
        <p className="opacity-0">hellp</p>
      </section>
      <section className="bg-gray-200 w-full min-h-dvh col-span-9 pt-24">
        <div className="relative max-w-[100ch] mx-auto bg-white min-h-dvh border-2 border-gray-400 rounded-lg p-12 space-y-8">
          <div className="space-y-2" datatype="resume-header">
            <h1 className="text-4xl">Person Name</h1>
            <ul className="flex items-center divide-x-2 divide-gray-900">
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
              Professional Summary
            </h2>
            <p className="text-sm leading-5 mt-2">
              Creative and results-driven Marketing Professional with 5+ years
              of experience in digital marketing, brand strategy, and content
              creation. Skilled in developing data-driven campaigns that drive
              engagement and revenue growth. Adept at managing cross-functional
              teams and building strong client relationships. Passionate about
              storytelling and leveraging emerging technologies to enhance brand
              visibility.
            </p>
          </section>
          {/* 
            End of Professional Summary
          */}
          <section className="">
            <h2 className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0">
              Skills
            </h2>
            <ul className="[&>li:first-child]:font-bold flex items-center gap-y-0 gap-x-2 list-none flex-wrap">
              <li>Digital Marketing:</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set</li>
            </ul>
            <ul className="[&>li:first-child]:font-bold flex items-center gap-y-0 gap-x-2 list-none flex-wrap">
              <li>Social Media:</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set</li>
            </ul>
            <ul className="[&>li:first-child]:font-bold flex items-center gap-y-0 gap-x-2 list-none flex-wrap">
              <li>Content Creation:</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set,</li>
              <li>Skill Set</li>
            </ul>
          </section>
          {/* 
            End of Skills
          */}
          <section>
            <h2 className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0">
              Work Experience
            </h2>
            <div
              className="flex items-center justify-between mt-2"
              data-type="experience-header"
            >
              <div>
                <p className="font-semibold">Job Title</p>
                <p>Company – City, ST</p>
              </div>
              <p>Start Date – End Date</p>
            </div>
            <ul
              className="ml-6 list-disc [&>li]:mt-1"
              data-type="experience-description"
            >
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners: 20 gold coins</li>
            </ul>
          </section>
          {/* 
            End of Work Expereince
          */}
          <section className="">
            <h2 className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0">
              Projects
            </h2>
          </section>
          {/* 
            End of Projects
          */}
          <section className="">
            <h2 className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0">
              Education
            </h2>
          </section>
          {/* 
            End of Education
          */}
        </div>
      </section>
    </main>
  );
}
