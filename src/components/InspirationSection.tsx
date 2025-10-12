import Image from "next/image";

export default function InspirationSection() {
  return (
    <section id="inspiration" className="py-24 overflow-x-clip relative">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Header */}
        <div className="text-center text-gray max-w-3xl mx-auto flex flex-col gap-6">
          <h2 className="text-accent text-xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-normal inline-flex flex-col items-center justify-center mx-auto">
            A Story That Inspires
            <span className="inline-flex items-center gap-2 mt-2">
              Our Mission
              <span className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                <Image
                  src="/book.svg"
                  alt="Udara Project"
                  fill
                  aria-hidden="true"
                  className="object-contain pointer-events-none select-none"
                />
              </span>
            </span>
          </h2>
        </div>

        {/* Story grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24 items-center">
          {/* Left column — text */}
          <div className="flex flex-col gap-8 text-gray text-base md:text-lg lg:text-2xl font-normal z-10 relative">
            <p>
              Meet <strong>Amina</strong>, a 19-year-old computer science
              student at the University of Lagos. She dreams 🤔 of using AI to
              solve real problems in her community — from helping farmers to
              creating educational tools in Yoruba.
            </p>
            <p>
              But every time she tries, the AI systems she uses fail to
              understand her world. They do not recognize her language, culture,
              or local realities.
            </p>
            <p>
              Amina’s story reflects the challenge faced by thousands of young
              Africans. They are ready to build with AI, but the tools are not
              built for them.
            </p>
            <p>
              The Udara Project exists to change that by empowering Africa’s
              next generation to create AI that understands and serves the
              continent.
            </p>
          </div>

          {/* Right column — image  */}
          <div className="hidden lg:block relative w-full h-[500px] lg:h-[600px] -mr-20 lg:-mr-40 xl:-mr-60">
            <Image
              src="/story-of-amina.svg"
              alt="Story of Amina"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
