import { motion } from 'framer-motion';
import { useRef } from 'react';



export default function CertificatesSection() {
  const certificates = [
    {
      title: "GenAI for Everyone",
      issuer: "Fractal Analytics / Coursera",
      date: "Feb 26, 2024",
      link: "https://coursera.org/verify/R6ZV7JGH2EY2",
      image: "/genai-for-everyone.png"
    },
    {
      title: "Algorithms on Strings",
      issuer: "Google",
      date: "2024",
      link: "https://drive.google.com/file/d/1icdi-y2AqYMXq64yEVsYLtCb5Ghoq6rI/view?usp=sharing",
      image: "/algorithms-on-strings.png"
    },
    {
      title: "Approximation Algorithms and Linear Programming",
      issuer: "Google",
      date: "2024",
      link: "https://drive.google.com/file/d/1Vbx_ae7BOSSfWb6WtF9XKMvCdtp2Ne51/view?usp=sharing",
      image: "/approximation-algorithms.png"
    },
    {
      title: "Programming in C++: A Hands-on Introduction",
      issuer: "Google",
      date: "2024",
      link: "https://drive.google.com/file/d/1H3Meo0UGsadQJQU40NzQIEDebrUyYgAT/view?usp=sharing",
      image: "/programming-in-cpp.png"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "2024",
      link: "https://drive.google.com/file/d/11ogaDV4pCaYWdEnH3fGjH2NTjymB6ic4/view?usp=sharing",
      image: "/bits-and-bytes.png"
    }
  ];

  // Duplicate certificates for seamless infinite scroll
  const allCertificates = [...certificates, ...certificates];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="certificates" className="py-16 bg-gray-900">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-300px * ${certificates.length}));
            }
          }
          .certificate-scroll {
            animation: scroll 20s linear infinite;
          }
          .certificate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Certificates</h2>
          
          <div className="relative h-[320px] overflow-hidden" ref={containerRef}>
            <div className="flex absolute certificate-scroll">
              {allCertificates.map((cert, index) => (
                <a
                  key={`${index}-${cert.title}`}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[300px] flex-shrink-0 mx-3 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-0 flex flex-col justify-start items-center text-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="w-full h-[170px] rounded-t-xl overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 justify-center items-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{cert.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 