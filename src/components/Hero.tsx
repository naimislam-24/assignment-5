import Banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-between gap-10 mt-20 container mx-auto">
        <div>
          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="text-slate-900">Build Your Ideal</span>
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-[#475569] mt-4 text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-linear-to-r from-orange-500 to-pink-500 py-2.5 px-5 text-white font-bold rounded-xl shadow-lg shadow-pink-200 hover:opacity-90 transition-opacity">
              Explore Technologies
            </button>
            <button className="py-2.5 px-15 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="shrink-0">
          <img
            src={Banner}
            alt="Development stack illustration"
            className="w-105"
          />
        </div>
      </div>
    </>
  );
}
