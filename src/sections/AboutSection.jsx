import React, { useMemo } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiJavascript,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiFigma,
} from "react-icons/si";

const aboutText = [
  "Merhaba! Ben Sude Kalaycı. Bandırma Onyedi Eylül Üniversitesi Web Tasarımı ve Kodlama bölümü mezunuyum. Frontend alanında kendimi geliştiriyor ve HTML, CSS, JavaScript, jQuery, React, Tailwind CSS ve Bootstrap gibi teknolojilerle modern web projeleri üretiyorum.",
  "Projelerimde sadece kodlamayı değil, aynı zamanda tasarımı da kendim yapıyorum. Kullanıcı odaklı, estetik ve işlevsel arayüzler oluşturmayı seviyorum.",
  "Yeni teknolojileri öğrenmeye ve her gün kendime bir şeyler katmaya devam ediyorum.",
];

const skills = [
  { name: "React.js", icon: <SiReact size={36} color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={36} color="#06B6D4" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={36} color="#7952B3" /> },
  { name: "jQuery", icon: <SiJquery size={36} color="#0769AD" /> },
  { name: "JavaScript", icon: <SiJavascript size={36} color="#F7DF1E" /> },
  { name: "WordPress", icon: <SiWordpress size={36} color="#21759B" /> },
  { name: "HTML", icon: <SiHtml5 size={36} color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 size={36} color="#1572B6" /> },
  { name: "Figma", icon: <SiFigma size={36} color="#F24E1E" /> },
];

const AboutSection = () => {
  const scrollingSkills = useMemo(() => [...skills, ...skills], []);

  return (
    <section
      id="about"
      className="min-h-screen max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16 text-white"
      aria-labelledby="about-heading"
      style={{ backgroundColor: "transparent" }}
    >
      {/* Üst bölüm: Resim ve yazı */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div
          className="w-full md:w-1/2 aspect-square rounded-lg overflow-hidden shadow-md border border-gray-300/20"
          role="img"
          aria-label="Sude Kalaycı'nın Fotoğrafı"
        >
          <img
            src="/path-to-your-photo.jpg"
            alt="Sude Kalaycı"
            className="object-cover w-full h-full"
            loading="lazy"
            decoding="async"
          />
        </div>

        <article className="w-full md:w-1/2 bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-lg text-base md:text-lg leading-relaxed space-y-6 text-white">
          {aboutText.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>
      </div>

      {/* Alt bölüm: Kayar teknoloji kutuları */}
      <div
        aria-label="Kullanılan teknoloji yetkinlikleri"
        className="relative w-full overflow-hidden h-32"
      >
        <div className="animate-scroll flex gap-12 w-max absolute top-1/2 -translate-y-1/2 left-0">
          {scrollingSkills.map(({ name, icon }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center
                w-28 h-28
                bg-white/20 border border-gray-400/30
                rounded-lg
                select-none
                shadow-md
                hover:bg-white/40
                transition
                cursor-default"
              title={name}
            >
              <div className="mb-3">{icon}</div>
              <span className="text-sm font-semibold
                bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400
                bg-clip-text text-transparent
                drop-shadow-lg
              ">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
          will-change: transform;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 40s; /* Yavaşlat */
          }
          div[aria-label="Kullanılan teknoloji yetkinlikleri"] {
            height: 24rem; /* Daha yüksek kutu */
          }
        }

        @media (max-width: 480px) {
          .animate-scroll {
            animation-duration: 50s;
            gap: 8rem !important;
          }
          div[aria-label="Kullanılan teknoloji yetkinlikleri"] {
            height: 20rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
