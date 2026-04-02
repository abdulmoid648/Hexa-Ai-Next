import React from "react";
import Image from "next/image";

export default function CareersHero() {
  return (
    <section className="relative w-full bg-white pt-24 pb-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center">

      {/* Decorative blurred background splashes similar to the screenshot */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-gradient-to-br from-fuchsia-100/40 to-transparent blur-3xl rounded-full opacity-60 translate-x-1/3 -translate-y-1/4 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-gradient-to-tr from-sky-100/40 to-transparent blur-3xl rounded-full opacity-60 -translate-x-1/3 translate-y-1/4 mix-blend-multiply" />

      {/* Header Content */}
      <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-[72px] font-medium tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[rgba(14,165,233,1)] to-[rgba(238,16,229,1)] bg-clip-text text-transparent">
            Join Our Team
          </span>
        </h1>
        <p className="text-gray-500 text-base md:text-[18px] leading-relaxed max-w-2xl mx-auto font-medium">
          Join a team where passion meets purpose. Discover a career where your
          contributions are valued and where you can truly make a difference.
        </p>
      </div>

      {/* Staggered Masonry Image Collage */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 lg:gap-6 relative z-10">

        {/* Column 1 */}
        <div className="flex flex-col gap-4 md:mt-24 w-full md:w-1/5 max-w-[280px]">
          {/* Wrapper with relative for background card positioning */}
          <div className="relative">
            {/* Decorative background card offset behind the image */}
            <div
              className="absolute inset-0 rounded-2xl md:rounded-3xl -z-10 translate-x-4 translate-y-4 p-[3px]"
              style={{ background: 'linear-gradient(125deg, rgba(238, 16, 229, 1) 40%, rgba(14, 165, 233, 1) 70%)' }}
            >
              <div className="w-full h-full bg-white rounded-2xl md:rounded-[20px]" />
            </div>
            {/* Main image card */}
            <div className="relative w-full aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden p-[3px] shadow-sm hover:shadow-md transition-shadow"
              style={{ background: 'linear-gradient(135deg, rgba(14,165,233,1), rgba(238,16,229,1))' }}
            >
              <div className="absolute inset-[2px] rounded-2xl md:rounded-3xl overflow-hidden bg-white">
                <Image
                  src="/Careers/J1.png"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 md:mt-12 w-full md:w-1/5 max-w-[280px]">
          <div className="relative w-full aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div
              className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden z-10 mix-blend-overlay"
              style={{ background: 'linear-gradient(to bottom, rgba(238, 16, 229, 0.8) 0%, transparent 40%)' }}
            ></div>
            <Image
              src="/Careers/J2.png"
              alt="Team member working"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* Column 3 (Center) */}
        <div className="flex flex-col gap-4 w-full md:w-[22%] max-w-[280px]">
          <div className="relative w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-2xl md:rounded-2xl" style={{ aspectRatio: '4/3' }}>
            <Image
              src="/Careers/J4.png"
              alt="Meeting grayscale"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="relative">
            {/* Decorative background card offset behind J3 */}
            <div
              className="absolute inset-0 rounded-2xl md:rounded-2xl -z-10 translate-x-4 translate-y-4 p-[3px]"
              style={{ background: 'linear-gradient(125deg, rgba(238, 16, 229, 1) 40%, rgba(14, 165, 233, 1) 70%)' }}
            >
              <div className="w-full h-full bg-white rounded-[14px] md:rounded-[14px]" />
            </div>

            {/* Main image card (J3) */}
            <div className="relative w-full overflow-hidden p-[3px] shadow-sm hover:shadow-md transition-shadow rounded-2xl md:rounded-2xl"
              style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, rgba(14,165,233,1), rgba(238,16,229,1))' }}>
              <div className="absolute inset-[3px] rounded-[14px] md:rounded-[14px] overflow-hidden bg-white">
                <Image
                  src="/Careers/J3.png"
                  alt="Team selfie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4 md:mt-16 w-full md:w-1/5 max-w-[280px]">
          <div className="relative w-full aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-fuchsia-200">
            <div
              className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden z-10 mix-blend-overlay"
              style={{ background: 'linear-gradient(to top, rgba(238, 16, 229, 0.8) 0%, transparent 30%)' }}
            ></div>

            <Image
              src="/Careers/J5.png"
              alt="Team member working back"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-4 w-full md:w-[22%] max-w-[280px] md:-mt-8">
          <div className="relative">
            {/* Decorative background card offset to the TOP for J6 */}
            <div
              className="absolute inset-0 rounded-2xl md:rounded-2xl -z-10 -translate-x-4 -translate-y-4 p-[3px]"
              style={{ background: 'linear-gradient(125deg, rgba(238, 16, 229, 1) 40%, rgba(14, 165, 233, 1) 70%)' }}
            >
              <div className="w-full h-full bg-white rounded-[14px] md:rounded-[14px]" />
            </div>

            {/* Main image card (J6) */}
            <div className="relative w-full overflow-hidden p-[3px] shadow-sm hover:shadow-md transition-shadow rounded-2xl md:rounded-2xl"
              style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, rgba(14,165,233,1), rgba(238,16,229,1))' }}>
              <div className="absolute inset-[3px] rounded-[14px] md:rounded-[14px] overflow-hidden bg-white">
                <Image
                  src="/Careers/J6.png"
                  alt="Team meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-2xl md:rounded-2xl" style={{ aspectRatio: '4/3' }}>
            <Image
              src="/Careers/J7.png"
              alt="B&W team pointing"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* Column 6 (Rightmost) */}
        <div className="flex flex-col gap-4 md:mt-20 w-full md:w-1/5 max-w-[280px] hidden lg:flex">
          <div className="relative">
            {/* Decorative background card offset LEFT for J8 */}
            <div
              className="absolute inset-0 rounded-2xl md:rounded-3xl -z-10 -translate-x-4 translate-y-4 p-[3px]"
              style={{ background: 'linear-gradient(125deg, rgba(238, 16, 229, 1) 40%, rgba(14, 165, 233, 1) 70%)' }}
            >
              <div className="w-full h-full bg-white rounded-2xl md:rounded-[22px]" />
            </div>

            {/* Main image card (J8) */}
            <div className="relative w-full aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden p-[3px] shadow-sm hover:shadow-md transition-shadow"
              style={{ background: 'linear-gradient(135deg, rgba(14,165,233,1), rgba(238,16,229,1))' }}
            >
              <div className="absolute inset-[3px] rounded-2xl md:rounded-[22px] overflow-hidden bg-white ">
                <Image
                  src="/Careers/J8.png"
                  alt="Smiling team member"
                  fill
                  className="object-cover object-[70%_0%] "
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
