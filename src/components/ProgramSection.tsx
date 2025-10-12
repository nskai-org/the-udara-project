import Image from "next/image";

const programs = [
  {
    title: "Pan Africa Reach",
    description: "Connecting 9 African countries through hybrid learning.",
    icon: "/globe.svg",
  },
  {
    title: "AI for All",
    description: "Accessible training, mentorship, and real-world projects.",
    icon: "/education.svg",
  },
  {
    title: "Collaboration at Scale",
    description: "Partnering with 300 institutions to impact 300,000 students.",
    icon: "/handshake.svg",
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="py-24">
      <div className="container max-w-5xl mx-auto px-4 flex flex-col items-center justify-center">
        {/* top container */}
        <div className="flex flex-col gap-9 items-center">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-semibold md:leading-none tracking-[-0.5%] text-center max-w-[260px] md:max-w-2xl">
            Powering Africa’s AI Revolution
          </h2>
          <p className="text-base text-balance text-gray font-light sm:text-lg md:text-2xl text-center tracking-normal max-w-lg md:max-w-4xl">
            The Udara Project bridges technology, education, and community,
            reaching across borders to make AI learning accessible, inclusive,
            and transformative for all.
          </p>
        </div>

        {/* bottom container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-12 md:gap-6 lg:gap-12 mt-16">
          {/* cards container */}
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`flex flex-col md:flex-col items-center gap-10 mt-16 ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Ellipse background */}
              <div className="relative flex items-center justify-center w-[120px] h-[120px] bg-[#EDEBEB] rounded-full">
                <Image
                  src={program.icon}
                  alt={program.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <div className="flex-1 max-w-xs flex flex-col gap-4 font-secondary">
                <h3 className="text-xl text-accent text-center font-medium leading-none tracking-[0%]">
                  {program.title}
                </h3>
                <p className="max-w-[240px] text-balance text-sm text-accent font-normal text-center leading-none tracking-[0%]">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
