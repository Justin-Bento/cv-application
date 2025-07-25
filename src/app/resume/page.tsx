import { Download } from "lucide-react";

export default function Resume() {
  return (
    <>
      <main className=" container mx-auto mt-24">
        <section className="max-w-5xl">
          <h1 className="scroll-m-20 text-4xl lg:tracking-wide font-extrabold tracking-tight">
            Build Your Resume
          </h1>
          <p className="text-lg/[2] tracking-wide mt-4">
            Create a professional resume that stands out. Edit in real-time and
            download as PDF.
          </p>
        </section>
        <section className="grid grid-cols-2 gap-8 mt-8 ">
          <div className="rounded-xl border p-6 max-h-[100dvh] overflow-y-scroll ring-1 ring-gray-300  ">
            {/* Sections of a resume */}
            <div className="">
              <h2 className="scroll-m-20 text-xl font-semibold">
                Personal Infromation
              </h2>
              <ul className="space-y-4 my-4">
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  Name:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="john doe"
                  />
                </li>
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  E-Mail:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="the-doe@exampl.com"
                  />
                </li>
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  Github:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="github.com/john-doe"
                  />
                </li>
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  LinkedIn:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="linkedin.com/in/johndoe/"
                  />
                </li>
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  Personal Website:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="www.john-doe.com"
                  />
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className="scroll-m-20 text-xl font-semibold">
                Professional Summary
              </h2>
              <textarea
                name=""
                id=""
                rows={2}
                className="border w-full p-3 rounded"
              ></textarea>
            </div>
            <div className="">
              <h2 className="scroll-m-20 text-xl font-semibold">
                Work Expereince
              </h2>
              <ul className="">
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  Job Title:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="john doe"
                  />
                </li>
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  Company:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="john doe"
                  />
                </li>
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  City:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="john doe"
                  />
                </li>
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  State:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="john doe"
                  />
                </li>

                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  Start Date:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="john doe"
                  />
                </li>
                <li className="flex flex-col gap-2 text-sm font-bold leading-[2]">
                  End Date:
                  <input
                    type="text"
                    className="border rounded-lg py-2.5 px-2 p-1 text-xs text-gray-700"
                    placeholder="john doe"
                  />
                </li>
              </ul>
              <ul className="">
                <li className="">Bullet Point</li>
              </ul>
            </div>
            <div className="">
              <h2 className="scroll-m-20 text-xl font-semibold">Skills</h2>
            </div>
          </div>
          <div className="rounded-xl border py-6 shadow-sm">&nbsp;</div>
        </section>
        <section className="mt-12">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-1.5"
          >
            <Download className="w-5 h-5" />
            Generate PDF
          </button>
        </section>
      </main>
    </>
  );
}
