import React from 'react';
import { Briefcase, Clock, Star, Layout, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function JobContent() {
  const vacancyDetails = [
    { icon: <Briefcase size={18} />, text: 'DevOps Developer' },
    { icon: <Clock size={18} />, text: 'Full Time' },
    { icon: <Star size={18} />, text: 'Mid-Level' },
    { icon: <Layout size={18} />, text: 'On-Site' },
    { icon: <MapPin size={18} />, text: 'Lahore, Pakistan' },
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Main Job Title */}
        <h1 className="text-3xl md:text-[42px] font-medium text-gray-800 text-center mb-24 tracking-tight">
          Mid-level DevOps Developer
        </h1>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Sidebar: Vacancy Details */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-medium text-gray-800 mb-8 tracking-tight">
              Vacancy details
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-1 space-y-6 mb-12 ">
              {vacancyDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-4 text-gray-500 font-medium text-[15px] md:text-[17px]">
                  <span className="text-gray-400">{detail.icon}</span>
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/submit-resume"
              className="hidden lg:block bg-[#313131] hover:bg-black text-white px-10 py-3 rounded-xl font-medium transition-all text-base shadow-sm hover:shadow-md text-center"
            >
              Apply Now
            </Link>
          </div>

          {/* Right Main Content */}
          <div className="lg:w-2/3 space-y-10">

            {/* Intro Text */}
            <p className="text-gray-500 leading-relaxed font-medium text-[17px]">
              Wish to be part of a strong team of professionals and create innovative and challenging projects? So, this opportunity is definitely for you!
            </p>

            {/* Our Mission */}
            <div>
              <h3 className="text-[#00A3FF] text-xl md:text-[30px] font-semibold mb-6 ">
                Our Mission
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium text-[17px]">
                Hexa Ai are a team of passionate individuals. We understand that every business is unique and we will work with the clients to maximize the value of enterprise platforms to fit every client's unique needs.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h3 className="text-[#00A3FF] text-xl md:text-[30px] font-semibold mb-6">
                Key Responsibilities:
              </h3>
              <ul className="space-y-4 text-gray-500 font-medium text-[17px]">
                <li className="flex items-start gap-2 mb-0">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span>Develop, maintain, and automate CI/CD pipelines and infrastructure using tools like Terraform, CloudFormation, Ansible, Chef, or Puppet.</span>
                </li>
                <li className="flex items-start gap-2 mb-0">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span>Monitor, optimize, and troubleshoot cloud environments (AWS, Azure, GCP) for performance, scalability, and cost-efficiency.</span>
                </li>
                <li className="flex items-start gap-2 mb-0">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span>Collaborate with development teams to ensure smooth application deployment and integration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span>Keep documentation up-to-date and stay informed on industry best practices and emerging DevOps technologies.</span>
                </li>
              </ul>
            </div>

            {/* Qualifications */}
            <div>
              <h3 className="text-[#00A3FF] text-xl md:text-[30px] font-semibold mb-6">
                Qualifications:
              </h3>
              <ul className="space-y-4 text-gray-500 font-medium text-[17px]">
                <li className="flex items-start gap-2 mb-0">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span>Bachelor's degree in Computer Science, IT, or related field, with 3+ years of DevOps or system admin experience.</span>
                </li>
                <li className="flex items-start gap-2 mb-0">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span>Hands-on experience with cloud platforms (AWS, Azure, GCP), scripting (Bash, Python), and containerization (Docker, Kubernetes).</span>
                </li>
                <li className="flex items-start gap-2 mb-0">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span>Proficiency with CI/CD tools like Jenkins, GitLab CI, CircleCI and infrastructure-as-code tools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  <span>Strong problem-solving and communication skills.</span>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-[#00A3FF] text-xl md:text-[30px] font-semibold mb-6">
                Benefits to join us:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-4 text-gray-500 font-medium text-[17px]">
                {[
                  'Biannual Salary Increments',
                  'Paid Leaves (Encashable)',
                  'Project based Commission & Incentives',
                  'Monthly Town hall Meet ups',
                  'Annual Dinner & Service Recognition Awards',
                  'Paternity & Maternity Leaves',
                  'Compensatory Leaves',
                  'Company Sponsored Lunches & Dinners',
                  'Structured Career Growth & Learning Opportunities',
                  'Company Sponsored Trips'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 mb-0">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile-only Apply Button, moved to end */}
            <div className="pt-8 lg:hidden flex justify-center">
              <Link 
                href="/submit-resume" 
                className="w-full sm:w-auto bg-[#313131] hover:bg-black text-white px-10 py-4 rounded-xl font-medium transition-all text-base shadow-sm hover:shadow-md text-center block"
              >
                Apply Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
