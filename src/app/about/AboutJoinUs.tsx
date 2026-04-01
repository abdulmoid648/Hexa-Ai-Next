import React from "react";

export default function AboutJoinUs() {
  return (
    <section className="bg-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 items-center ">
        <div className="max-w-md mx-auto lg:mx-0 lg:pr-10 flex flex-col items-center lg:items-start text-center lg:text-left ml-0 lg:ml-20 lg:mb-40 order-2 lg:order-1">
          <h2 className="text-[29px]  font-medium tracking-tight text-gray-800 mb-6 leading-[1.1] ">
            Join us to shape the future of human-technology interaction
          </h2>
          <p className="text-[14px] text-gray-500 mb-10 leading-relaxed font-medium max-w-[340px]">
            We&apos;re always looking for talented and driven minds from diverse backgrounds to join our team.
          </p>
          <button className="bg-[#3D3D3D] hover:bg-black transition-colors text-white text-[13px] tracking-wide font-medium px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg">
            See Openings
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3 md:gap-5 w-full max-w-2xl mx-auto order-1 lg:order-2">
          <div className="flex flex-col justify-center pt-8 md:pt-16">
            {/* Left Img */}
            <div className="relative w-full aspect-[2/3] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/about/Join3.jpg" alt="Join our team" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-5 pt-0 translate-y-2 md:translate-y-10">

            {/* Middle Top */}
            <div className="relative w-full aspect-square md:aspect-[3/3] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow ">
              <img src="/about/Join1.jpg" alt="Team brainstorming" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            {/* Middle Bottom */}
            <div className="relative w-full aspect-square md:aspect-[3/3] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/about/Join4.png" alt="Developer smiling" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          {/* Right Img */}
          <div className="flex flex-col justify-center pt-16 md:pt-32 -translate-y-2 md:-translate-y-4">
            <div className="relative w-full aspect-[2/3] md:aspect-[2/3] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow trans">
              <img src="/about/Join2.png" alt="Team strategy meeting" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
