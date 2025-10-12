export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40 z-0" />
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-2xl md:text-5xl sm:text-3xl font-bold leading-tight">
          Empowering Africa’s Next{" "}
          <span className="block">Generation of AI Innovators</span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl mt-6 max-w-xl mx-auto text-balance tracking-normal">
          From Lagos to Nairobi, Cairo to Cape Town, The Udara Project is
          uniting Africa’s brightest minds in a transformative week-long journey
          into the world of artificial intelligence.
        </p>
      </div>

      {/* Wave shape divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19
               c-82.26-17.34-168.06-16.33-250.45.39
               -57.84,11.73-114,31.07-172,41.86
               A600.21,600.21,0,0,1,0,27.35V120H1200V95.8
               C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
