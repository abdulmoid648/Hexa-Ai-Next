import React from 'react';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CareersRoles() {
  const roles = [
    {
      status: 'Open Role',
      time: '3hrs ago',
      title: 'Mid-level DevOps Developer',
      type: 'Full Time',
      salary: '100K - 150K',
      location: 'Lahore, Pakistan'
    },
    {
      status: 'Open Role',
      time: '3hrs ago',
      title: 'Junior UI/UX Designer',
      type: 'Full Time',
      salary: '100K - 150K',
      location: 'Lahore, Pakistan'
    },
    {
      status: 'Open Role',
      time: '3hrs ago',
      title: 'Front-End Developer',
      type: 'Full Time',
      salary: '100K - 150K',
      location: 'Lahore, Pakistan'
    }
  ];

  return (
    <section className="relative w-full bg-white flex flex-col items-center">

      {/* Container with GIF Background */}
      <div
        className="relative w-full flex flex-col items-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Careers/Rolesbg.gif')" }}
      >
        {/* Lightening Overlay */}
        <div className="absolute inset-0 bg-white/70 pointer-events-none" />

        {/* Heading */}
        <h2 className="relative z-10 text-3xl md:text-[36px] text-gray-800 font-medium mb-12 text-center tracking-tight">
          Find the role that best fits you!
        </h2>

        {/* Roles Grid */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-6 w-full max-w-[1100px] justify-center items-stretch mb-24">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl md:rounded-[20px] p-8 w-full lg:w-1/3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#00A3FF] text-sm font-medium">{role.status}</span>
                  <span className="text-[#00A3FF] text-[8px]">●</span>
                  <span className="text-gray-400 text-sm font-medium">{role.time}</span>
                </div>

                <h3 className="text-lg md:text-[20px] font-semibold text-gray-800 mb-6">
                  {role.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-500 text-sm font-medium mb-10">
                  <span>{role.type}</span>
                  <span className="text-[#00A3FF] text-[8px] mx-1">●</span>
                  <span>{role.salary}</span>
                  <div className="flex items-center ml-1">
                    <MapPin size={16} className="text-[#00A3FF] mr-1" strokeWidth={2.5} />
                    <span>{role.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <Link href="#" className="text-[#00A3FF] font-semibold text-sm hover:underline">
                  View & Apply
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Call to Action */}
      <div className="flex flex-col items-center text-center mt-20 mb-32 w-full px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl md:text-[28px] font-medium text-gray-800 mb-6 tracking-tight">
          Couldn't find your position?
        </h3>
        <Link 
          href="/submit-resume"
          className="bg-[#313131] hover:bg-[#1a1a1a] text-white px-8 py-3 rounded-xl font-medium transition-colors text-sm text-center inline-block"
        >
          Send your Resume
        </Link>
      </div>

    </section>
  );
}
