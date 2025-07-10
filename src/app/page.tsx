export default function Home() {
  return (
    <>
      <main className="container mx-auto min-h-dvh grid items-center">
        <section className="text-center">
          <span className="flex flex-col-reverse gap-4">
            <h1 className="scroll-m-20 text-4xl  lg:tracking-wide font-extrabold tracking-tight text-balance">
              Taxing Laughter: The Joke Tax Chronicles
            </h1>
            <p>The Odin Project - Project: Cover Letter</p>
          </span>
          <p className="text-lg/[2] tracking-wide mt-4 max-w-5xl lg:mx-auto text-balance">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax. After all," he said,
            "everyone enjoys a good joke, so it's only fair that they should pay
            for the privilege
          </p>
          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href=""
              className="text-sm/[2] bg-black text-white px-6 py-1 rounded"
            >
              View Project&nbsp;&rarr;
            </a>
            <a href="" className="text-sm/[2]">
              View Code
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
