export default function AboutIntro() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-6 pt-16 text-center lg:px-10 lg:pt-20">
      <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        About Me
      </span>

      <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
        The Story Behind The Code
      </h1>

      {/* Keep this short — 2 to 3 lines about who you are and your role. */}
      <p className="mx-auto mt-5 max-w-xl text-gray-500">
        I&apos;m Imran, a Full Stack Developer who enjoys turning ideas into
        clean, working products. Here&apos;s a quick look at the path that got
        me here.
      </p>
    </section>
  );
}
