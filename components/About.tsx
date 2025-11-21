import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-blue-900"
    >
      <div className="w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-0">
          {/* Photo - Left side - Full size */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[700px] lg:h-screen lg:min-h-[900px]">
              <Image
                src="/images/1000145285.jpg"
                alt="Drashti Bhavsar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text content - Right side - Dark blue background */}
          <div className="w-full lg:w-1/2 bg-gray-200 text-blue-900 flex items-center justify-center px-8 lg:px-12 py-12 lg:py-20">
            <div className="max-w-none">
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-9 text-center lg:text-left">
                About Me
              </h2>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-lg text-blue-900 leading-relaxed mb-6">
                  I&apos;m a graduate student at Northeastern University, pursuing my passion for Artificial Intelligence and Machine Learning, where I focus on building practical, high-impact intelligent systems. Over the past few years, I&apos;ve worked with institutions like ISB, IIT Roorkee, and ISRO, contributing to projects in autonomous systems, patent analytics, and atmospheric prediction—giving me a unique blend of research depth and engineering execution.
                </h2>
                <h3 className="text-lg text-blue-900 leading-relaxed mb-6">
                I&apos;m especially drawn to innovation at the intersection of AI, automation, and scalable systems, and I&apos;ve published multiple papers in top-tier journals including Elsevier, Springer, and EBSCO.
                </h3>
                <h3 className="text-lg text-blue-900 leading-relaxed mb-6">
                Alongside my technical work, I love exploring emerging AI developments, experimenting with new tools, and contributing to the open-source ecosystem. I aim to build technology that makes complex problems easier, smarter, and more human-centric.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

