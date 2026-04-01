export default function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col pt-12 mb-0">
      <div className="flex justify-end w-full pr-4 mb-6 relative z-10">
        <h1 className="text-5xl sm:text-7xl md:text-5xl lg:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[rgba(14,165,233,1)] to-[rgba(238,16,229,1)] max-w-[800px] leading-none mb-4 -mt-10 mr-0 pb-4 pr-1">
          ABOUT
        </h1>
      </div>

      <div className="w-full relative aspect-[16/8] overflow-hidden rounded-[1.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.08)] bg-gray-100 z-0  ">
        <img
          src="/About/About-Hero.png"
          alt="Hexa AI Team working on screens"
          className="w-full h-full object-cover rounded-"
        />
      </div>
    </section>
  );
}
