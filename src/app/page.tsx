import React from "react";
import ResumeHeader from "@/components/ResumeHeader";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import ProfessionalSkills from "@/components/ProfessionalSkills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Eduction from "@/components/Eduction";

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
            {sampleUser.projectData.map((data, index) => {
              return (
                <Projects
                  key={index}
                  projectName={data.name}
                  githubCode={data.code}
                  liveDemo={data.live}
                  projectSummary={data.summary}
                />
              );
            })}
          </section>

          {/* Education */}
          <section aria-labelledby="education-heading">
            <h2
              id="education-heading"
              className="scroll-m-10 border-b pb-1 text-base/6 font-semibold tracking-tight transition-colors m-0 p-0"
            >
              Education
            </h2>
            {sampleUser.educationData.map((data, index) => {
              return (
                <Eduction
                  key={index}
                  school={data.school}
                  degree={data.degree}
                  credential={data.credential}
                  graduation={data.graduation}
                />
              );
            })}
          </section>
        </div>
      </section>
    </main>
  );
}
