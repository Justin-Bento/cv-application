import React from "react";
import ResumeHeader from "@/components/ResumeHeader";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import ProfessionalSkills from "@/components/ProfessionalSkills";
import Experience from "@/components/Experience";

const sampleUser = {
  name: "Ava JohnSon",
  email: "john.doe@gmail.com",
  phoneNumber: 6474640303,
  website: "www.john-doe.com",
  linkedin: "john_doe",
  github: "john_doe",
  summary:
    "Creative and results-driven Marketing Professional with 5+ years of experience in digital marketing, brand strategy, and content creation. Skilled in developing data-driven campaigns that drive engagement and revenue growth. Adept at managing cross-functional teams and building strong client relationships. Passionate about storytelling and leveraging emerging technologies to enhance brand visibility",
  professionalSkillsData: [
    {
      specializations: "Digital Marketing",
      highlights: [
        "Campaign Strategy",
        "SEO",
        "Email Advertising",
        "Conversion Rate Optimization",
        "Google Analytics KPI",
        //  ...
      ],
    },
    {
      specializations: "Web Development",
      highlights: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "TypeScript",
        //  ...
      ],
    },
  ],
  workExperenceData: [
    {
      id: 1,
      jobTitle: "Senior Marketing Specialist",
      company: "BrightPath Marketing Agency",
      city: "New York",
      state: "NY",
      dates: {
        start: "June 2020",
        end: "present",
      },
      bullet_point: [
        "Lead the development and execution of integrated marketing campaigns for clients in the tech and retail industries, resulting in a 25% average increase in customer engagement.",
        "Manage a team of 4 junior marketers, providing mentorship and guidance on campaign strategy and execution.",
        "Analyze campaign performance using Google Analytics and Tableau, delivering actionable insights to optimize ROI.",
      ],
    },
    {
      id: 2,
      jobTitle: "Senior Marketing Specialist",
      company: "BrightPath Marketing Agency",
      city: "New York",
      state: "NY",
      dates: {
        start: "June 2020",
        end: "present",
      },
      bullet_point: [
        "Lead the development and execution of integrated marketing campaigns for clients in the tech and retail industries, resulting in a 25% average increase in customer engagement.",
        "Manage a team of 4 junior marketers, providing mentorship and guidance on campaign strategy and execution.",
        "Analyze campaign performance using Google Analytics and Tableau, delivering actionable insights to optimize ROI.",
      ],
    },
    {
      id: 3,
      jobTitle: "Senior Marketing Specialist",
      company: "BrightPath Marketing Agency",
      city: "New York",
      state: "NY",
      dates: {
        start: "June 2020",
        end: "present",
      },
      bullet_point: [
        "Lead the development and execution of integrated marketing campaigns for clients in the tech and retail industries, resulting in a 25% average increase in customer engagement.",
        "Manage a team of 4 junior marketers, providing mentorship and guidance on campaign strategy and execution.",
        "Analyze campaign performance using Google Analytics and Tableau, delivering actionable insights to optimize ROI.",
      ],
    },
  ],
};

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
          <ResumeHeader
            userName={sampleUser.name}
            phoneNumber={sampleUser.phoneNumber}
            userEmail={sampleUser.email}
            userWebsite={sampleUser.website}
            linkedinUser={sampleUser.linkedin}
            githubName={sampleUser.github}
          />

          {/* Professional Summary */}
          <section aria-labelledby="professional-summary-heading">
            <h2
              id="professional-summary-heading"
              className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0"
            >
              Professional Summary
            </h2>
            <ProfessionalSummary summary={sampleUser.summary} />
          </section>

          {/* Skills */}
          <section aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0"
            >
              Skills
            </h2>
            {sampleUser.professionalSkillsData.map((skillSet, index) => (
              <ProfessionalSkills
                key={index}
                specializations={skillSet.specializations}
                highlights={skillSet.highlights}
              />
            ))}
          </section>

          {/* Work Experience */}
          <section aria-labelledby="work-experience-heading">
            <h2
              id="work-experience-heading"
              className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0"
            >
              Work Experience
            </h2>
            {sampleUser.workExperenceData.map((expereince) => {
              return (
                <Experience
                  key={expereince.id}
                  jobTitle={expereince.jobTitle}
                  company={expereince.company}
                  city={expereince.city}
                  state={expereince.state}
                  startDate={expereince.dates.start}
                  endDate={expereince.dates.end}
                  bulletPoints={expereince.bullet_point}
                />
              );
            })}
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
