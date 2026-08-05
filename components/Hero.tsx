export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 bg-black text-white">

      <p className="text-cyan-400 font-bold tracking-[4px] uppercase mb-8">
        AI Powered Learning Platform
      </p>

      <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
        Learn Future Skills
        <br />
        With <span className="text-cyan-400">NovaSkill</span>
      </h1>

      <p className="mt-8 max-w-3xl text-xl text-gray-400">
        Master Artificial Intelligence, Programming, Web Development,
        Cyber Security, Data Science and more through interactive online
        courses.
      </p>

      <div className="flex gap-6 mt-12">
        <button className="bg-cyan-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 transition">
          Start Learning
        </button>

        <button className="border border-gray-600 px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-black transition">
          Explore Courses
        </button>
      </div>

    </section>
  );
}