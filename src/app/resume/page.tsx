import { Download } from "lucide-react";

export default function Resume() {
  return (
    <>
      <main className="min-h-dvh container mx-auto mt-24">
        <section className="max-w-5xl">
          <h1 className="scroll-m-20 text-4xl lg:tracking-wide font-extrabold tracking-tight">
            Build Your Resume
          </h1>
          <p className="text-lg/[2] tracking-wide mt-4">
            Create a professional resume that stands out. Edit in real-time and
            download as PDF.
          </p>
        </section>
        <section className="grid grid-cols-2 gap-8 mt-8">
          <div className="rounded-xl border py-6">&nbsp;</div>
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
