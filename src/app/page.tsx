import React from "react";

export default function Page() {
  return (
    <main className="grid grid-cols-12 gap-4">
      {/* Sidebar */}
      <section
        className="bg-gray-200 w-full min-h-dvh col-span-3"
        aria-label="Sidebar"
      >
        <p className="opacity-0">hello</p>
      </section>

      {/* Main Content */}
      <section
        className="bg-gray-200 w-full min-h-dvh col-span-9 pt-24"
        aria-label="Resume Content"
      >
        <div className="relative max-w-[100ch] mx-auto bg-white min-h-dvh border-2 border-gray-400 rounded-lg p-12 space-y-8">
          {/* Resume Header */}
          <div className="space-y-2" data-type="resume-header">
            <h1 className="text-4xl">Person Name</h1>
            <div className="flex items-center divide-x-2 divide-gray-900">
              <p className="px-2">647-464-0303</p>
              <p className="px-2">example.name@gmail.com</p>
              <p className="px-2">www.person-name.com</p>
              <p className="px-2">github.com/personName</p>
            </div>
          </div>

          {/* Professional Summary */}
          <section aria-labelledby="professional-summary-heading">
            <h2
              id="professional-summary-heading"
              className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0"
            >
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

          {/* Skills */}
          <section aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0"
            >
              Skills
            </h2>
            <div className="space-y-1 mt-2">
              <div className="flex items-center gap-1 text-sm">
                <p className="font-semibold">Digital Marketing:</p>
                <p>
                  Skill Set, Skill Set, Skill Set, Skill Set, Skill Set, Skill
                  Set, Skill Set, Skill Set, Skill Set
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <p className="font-semibold">Social Media:</p>
                <p>
                  Skill Set, Skill Set, Skill Set, Skill Set, Skill Set, Skill
                  Set, Skill Set, Skill Set, Skill Set
                </p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <p className="font-semibold">Content Creation:</p>
                <p>
                  Skill Set, Skill Set, Skill Set, Skill Set, Skill Set, Skill
                  Set, Skill Set, Skill Set, Skill Set
                </p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section aria-labelledby="work-experience-heading">
            <h2
              id="work-experience-heading"
              className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0"
            >
              Work Experience
            </h2>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="flex items-center gap-2">
                <p className="font-semibold">Job Title</p>
                <p>Company – City, ST</p>
              </span>
              <p>Start Date – End Date</p>
            </div>
            <ul
              className="ml-6 list-disc [&>li]:mt-1 text-sm"
              data-type="experience-description"
            >
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners: 20 gold coins</li>
            </ul>
          </section>

          {/* Projects */}
          <section aria-labelledby="projects-heading">
            <h2
              id="projects-heading"
              className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0"
            >
              Projects
            </h2>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="flex items-center gap-2">
                <p className="font-semibold">Project Name</p>
              </span>
              <p>github.com/project-name</p>
            </div>
            <ul
              className="ml-6 list-disc [&>li]:mt-1 text-sm"
              data-type="experience-description"
            >
              <li>1st level of puns: 5 gold coins</li>
            </ul>
          </section>

          {/* Education */}
          <section aria-labelledby="education-heading">
            <h2
              id="education-heading"
              className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0"
            >
              Education
            </h2>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span className="flex items-center gap-2">
                <p className="font-semibold">School</p>
                <p>Degree in</p>
                <p>Degree</p>
              </span>
              <p>End Date</p>
            </div>
            <ul
              className="ml-6 list-disc [&>li]:mt-1 text-sm"
              data-type="experience-description"
            >
              <li>1st level of puns: 5 gold coins</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
