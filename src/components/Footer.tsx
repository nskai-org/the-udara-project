import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Home",
    links: [
      { name: "AI's Africa Revolution", href: "#" },
      { name: "Why We Matter", href: "#" },
      { name: "Numbers Reached", href: "#" },
      { name: "A Story that Inspires", href: "#inspiration" },
    ],
  },
  {
    title: "Program",
    links: [
      { name: "Lectures", href: "#" },
      { name: "Hands-on Practicals", href: "#" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Overview", href: "#" },
      { name: "Impact", href: "#" },
      { name: "Vision", href: "#" },
      { name: "Goal", href: "#" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "LinkediN", href: "#" },
      { name: "X", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border border-gray-800 mt-48">
      {/* row 1 */}
      <div className="w-full py-10 bg-brown">
        <div className="container max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-8">
          {/* ONE */}
          <div className="flex-1">
            {/* Logo */}
            <div className="relative w-[200px] h-[40px] [@media(min-width:940px)]:w-[331px] [@media(min-width:940px)]:h-[54px]">
              <Image
                src="/udara-project.svg"
                alt="Udara Project Logo"
                fill
                className="select-none pointer-events-none object-contain"
              />
            </div>

            <span className="text-sm">
              A week-long virtual and hybrid AI learning initiative designed to
              empower Africa’s next generation of innovators.
            </span>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="block">
                <Linkedin />
              </a>
              <a href="#" className="block">
                <Twitter />
              </a>
            </div>

            {/* email */}
            <span className="text-sm block mt-6">
              <strong>Email Us:</strong>{" "}
              <a href="mailto:admin@theudaraproject.com">
                admin@theudaraproject.com
              </a>
            </span>
          </div>
          {/* TWO */}
          <div className="relative container max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-12">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* row 2 */}

      <div className="relative w-full py-10 bg-brown overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="container relative z-10 max-w-5xl mx-auto px-4">
          <span className="text-sm">
            {" "}
            &copy; {new Date().getFullYear()} The Udara Project. Empowering
            Africa’s Next Generation of AI Innovators.
          </span>
        </div>
      </div>
    </footer>
  );
}
