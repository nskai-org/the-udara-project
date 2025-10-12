import Image from "next/image";

const impact = [
  {
    number: "300,000+",
    description: "Students Reached",
    image: "/blob-1.svg",
  },
  {
    number: "300",
    description: "Partner Institutions",
    image: "/blob-3.svg",
  },
  {
    number: "10",
    description: "Countries",
    image: "/blob-2.svg",
  },
];

export default function OurImpactSection() {
  return (
    <section id="impact" className="py-24">
      <div className="container max-w-5xl mx-auto px-4 pt-12 pb-32 text-center border-y-2 border-accent">
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impact.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image container */}
              <div className="relative w-80 h-80 mb-4">
                <Image
                  src={item.image}
                  alt={item.description}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text/number */}
              <h3 className="text-4xl font-semibold text-accent">
                {item.number}
              </h3>
              <p className="text-gray mt-2 text-lg font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
