import Image from "next/image";

export default function WhyUdaraMattersSection() {
  return (
    <section className="py-24">
      <div className="flex flex-col gap-32 items-center justify-center">
        {/* top container */}
        <div className="w-full bg-[url('/conference-gathering.svg')] bg-cover bg-center bg-no-repeat aspect-[16/9]"></div>

        {/* bottom container  */}
        <div id="udara" className="container max-w-5xl mx-auto px-4">
          <div className="text-center text-gray max-w-3xl mx-auto flex flex-col gap-12">
            <h2 className="text-accent text-xl sm:text-4xl md:text-5xl font-semibold leading-none tracking-normal inline-flex flex-col items-center justify-center mx-auto">
              Why The Udara Project
              <span className="inline-flex items-center gap-2">
                Matters
                <span className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                  <Image
                    src="/hand-in-fist.svg"
                    alt="Udara Project"
                    fill
                    aria-hidden="true"
                    className="object-contain pointer-events-none select-none"
                  />
                </span>
              </span>
            </h2>

            <div className="relative text-center text-gray max-w-3xl mx-auto">
              <p className="mt-6 text-base md:text-xl lg:text-[28px] font-secondary font-normal tracking-normal text-balance">
                Africa holds the world’s youngest population and its greatest
                potential. The Udara Project believes in unlocking that
                potential through AI education. By providing inclusive,
                accessible, and practical learning experiences, Udara is
                preparing the next generation to shape Africa’s future economy,
                innovation ecosystem, and technology leadership.
              </p>

              {/* Top SVG */}
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8">
                <Image
                  src="/man-woman.svg"
                  alt="Top SVG"
                  fill
                  aria-hidden="true"
                  className="object-contain pointer-events-none select-none"
                />
              </span>

              {/* Left SVG */}
              <span className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8">
                <Image
                  src="/africa-map.svg"
                  alt="Left SVG"
                  fill
                  aria-hidden="true"
                  className="object-contain pointer-events-none select-none"
                />
              </span>

              {/* Right SVG */}
              <span className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-8 h-8">
                <Image
                  src="/african.svg"
                  alt="Right SVG"
                  fill
                  aria-hidden="true"
                  className="object-contain pointer-events-none select-none"
                />
              </span>

              {/* Bottom SVG */}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/3 translate-y-1/2 w-8 h-8">
                <Image
                  src="/group-of-people.svg"
                  alt="Bottom SVG"
                  fill
                  aria-hidden="true"
                  className="object-contain pointer-events-none select-none"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
