import React from "react";

export default function JobDetailsHero() {
  return (
    <section className="relative bg-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background GIF - Only visible on md+ screens */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Careers/Rolesbg.gif')" }}
        suppressHydrationWarning
      />
      {/* Lightening Overlay - Only visible on md+ screens */}
      <div className="hidden md:block absolute inset-0 bg-white/70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-12 items-center ">
        <div className="max-w-md mx-auto lg:mx-0 lg:pr-10 flex flex-col items-center lg:items-start text-center lg:text-left ml-0 lg:ml-20 lg:mb-40 order-2 lg:order-1">
          <h2 className="text-[29px] font-medium tracking-tight text-gray-800 mb-6 leading-[1.1] ">
            Join us to shape the future of human-technology interaction
          </h2>
          <p className="text-[14px] text-gray-500 mb-10 leading-relaxed font-medium max-w-[340px]">
            We&apos;re always looking for talented and driven minds from diverse
            backgrounds to join our team.
          </p>
          <button className="bg-[#3D3D3D] hover:bg-black transition-colors text-white text-[13px] tracking-wide font-medium px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg">
            See Openings
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-5 w-full max-w-2xl mx-auto order-1 lg:order-2">
          {/* Left Column */}
          <div className="flex flex-col justify-center pt-8 md:pt-16 translate-x-0 md:-translate-x-6  ">
            <div className="relative">
              {/* Decorative card for Left Img */}
              <div
                className="hidden md:block md:absolute inset-0 rounded-2xl md:rounded-3xl z-0 translate-x-3 translate-y-10"
              >

                <div
                  className="absolute inset-0 rounded-2xl md:rounded-3xl p-[3px]"
                  style={{
                    background: 'linear-gradient(125deg, rgba(238, 16, 229, 1) 40%, rgba(14, 165, 233, 1) 70%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <div className="absolute inset-[3px] bg-white/40 backdrop-blur-md rounded-[13px] md:rounded-[21px]" />
              </div>

              {/* Main Image Card */}
              <div className="relative z-10 w-full aspect-[2/3] p-[3px] rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full h-full rounded-[13px] md:rounded-[21px] overflow-hidden bg-white">
                  <img
                    src="/About/Join3.jpg"
                    alt="Left image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-3 md:gap-5 pt-0 translate-y-2 md:translate-y-25 md:translate-x-0 translate-x-0">
            {/* Middle Top */}
            <div className="relative">
              {/* Decorative card for Middle Top */}
              <div
                className="hidden md:block md:absolute inset-0 rounded-2xl md:rounded-3xl z-0 -translate-x-4 -translate-y-4"
              >
                <div
                  className="absolute inset-0 rounded-2xl md:rounded-3xl p-[3px]"
                  style={{
                    background: 'linear-gradient(125deg, rgba(238, 16, 229, 1) 40%, rgba(14, 165, 233, 1) 70%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className="absolute inset-[3px] bg-white/40 backdrop-blur-md rounded-[13px] md:rounded-[21px]" />
              </div>
              <div className="relative z-10 w-full aspect-square md:aspect-[3/2] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-[3px]">
                <div className="w-full h-full rounded-[13px] md:rounded-[21px] overflow-hidden ">
                  <img
                    src="/About/Join1.jpg"
                    alt="Brainstorming"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Middle Bottom */}
            <div className="relative w-full aspect-square md:aspect-[3/2] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src="/About/Join4.png"
                alt="Developer smiling"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center pt-16 md:pt-32 translate-x-3 -translate-y-2 md:-translate-y-4">
            <div className="relative">
              {/* Decorative card for Right Img */}
              <div
                className="hidden md:block md:absolute inset-0 rounded-2xl md:rounded-3xl z-0 -translate-x-4 -translate-y-4"
              >
                <div
                  className="absolute inset-0 rounded-2xl md:rounded-3xl p-[3px]"
                  style={{
                    background: 'linear-gradient(125deg, rgba(238, 16, 229, 1) 40%, rgba(14, 165, 233, 1) 70%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className="absolute inset-[3px] bg-white/40 backdrop-blur-md rounded-[13px] md:rounded-[21px]" />
              </div>
              <div className="relative z-10 w-full aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-[3px] -translate-x-3 md:-translate-x-0">
                <div className="w-full h-full rounded-[13px] md:rounded-[21px] overflow-hidden bg-white">
                  <img
                    src="/About/Join2.png"
                    alt="Strategy meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
