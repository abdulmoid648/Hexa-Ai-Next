export default function AboutResearch() {
  return (
    <section className="relative pt-10 px-4 sm:px-6 lg:px-8 border-y border-gray-100 overflow-hidden">
      {/* Background GIF with overlay for text legibility */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/About/Research.gif")' }}
      />
      <div className="absolute inset-0 z-0 bg-white/85 backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        <div className="hidden lg:block"></div>
        <div className="flex flex-col gap-8 max-w-xl mx-auto lg:mx-0 mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium tracking-tight text-gray-800 leading-[1.1]">
            AI research and products that transform how we interact with
            technology
          </h2>
          <div className="space-y-6 text-[15px] text-gray-500 leading-relaxed font-medium">
            <p>
              Hexa AI is an AI company transforming how we interact with
              technology. Our goal is seamless communication and creation,
              starting with the first human-like voice model and expanding
              beyond voice.
            </p>
            <div>
              <p className="mb-2">We offer three platforms:</p>
              <ul className="list-disc pl-5 space-y-3 marker:text-gray-400">
                <li>
                  <span className=" text-gray-500">Hexa Agents:</span> Enables
                  businesses to deliver intelligent customer experiences with
                  scalable voice and chat agents.
                </li>
                <li>
                  <span className=" text-gray-500">Hexa Creative:</span>{" "}
                  Empowers creators to generate and edit speech, music, images,
                  and videos in over 70 languages.
                </li>
                <li>
                  <span className=" text-gray-500">Hexa API:</span> Provides
                  developers access to advanced AI audio models.
                </li>
              </ul>
            </div>
            <p>
              Through the Hexa AI Impact program, we offer free licenses to
              those in need, including individuals with accessibility needs and
              nonprofits in healthcare, education, and culture.
            </p>
            <p>
              AI safety is core to our innovation. Our dedicated team deploys
              comprehensive safeguards to prevent misuse. Our team of
              researchers, engineers, and founders is passionate about creating
              lasting impact. If you&apos;re driven to make a difference, we
              want to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
