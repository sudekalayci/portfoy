import { Link } from "react-scroll";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20, rotate: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const BrushStrokeSvg = () => (
  <svg
    viewBox="0 0 500 300"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-lg mx-auto"
  >
    <defs>
      <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
      <filter id="blur" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
      </filter>
    </defs>

    {/* Fırça darbesi görünümünde dalga yolu */}
    <motion.path
      d="M0,150 C100,120 150,180 250,150 C350,120 400,180 500,150 L500,300 L0,300 Z"
      fill="url(#waveGradient)"
      opacity="0.8"
      filter="url(#blur)"
      animate={{
        d: [
          "M0,150 C100,120 150,180 250,150 C350,120 400,180 500,150 L500,300 L0,300 Z",
          "M0,150 C100,100 150,200 250,130 C350,160 400,140 500,150 L500,300 L0,300 Z",
          "M0,150 C100,120 150,180 250,150 C350,120 400,180 500,150 L500,300 L0,300 Z",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Kod yazıları - dağılmış ve animasyonlu */}
    <motion.text
      x="40"
      y="80"
      fill="#fff"
      fontSize="22"
      fontWeight="bold"
      fontFamily="monospace"
      animate={{ y: [80, 75, 80], opacity: [1, 0.7, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      {"</>"}
    </motion.text>

    <motion.text
      x="150"
      y="110"
      fill="#fff"
      fontSize="18"
      fontWeight="bold"
      fontFamily="monospace"
      animate={{ x: [150, 155, 150] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      {"const"}
    </motion.text>

    <motion.text
      x="260"
      y="90"
      fill="#fff"
      fontSize="18"
      fontWeight="bold"
      fontFamily="monospace"
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      {"let"}
    </motion.text>

    <motion.text
      x="360"
      y="120"
      fill="#fff"
      fontSize="16"
      fontWeight="bold"
      fontFamily="monospace"
      animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      {"function()"}
    </motion.text>
  </svg>
);

const HeroSection = () => {
  const title = "Frontend Developer";
  const name = "Sude Kalaycı";
  const description =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi inventore eum expedita error, ullam explicabo tempore.";

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] flex flex-col md:flex-row justify-center items-center
                 text-center md:text-left px-4 md:px-12 relative overflow-hidden gap-12 pt-16"
      style={{ scrollMarginTop: "4rem" }} 
    >
      {/* Metin */}
      <motion.div
        className="flex-1 max-w-xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 uppercase tracking-widest">
          {title.split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <br />
          <span className="text-pink-400">
            {name.split("").map((char, i) => (
              <motion.span key={`name-${i}`} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p className="text-base md:text-xl text-white/90 mb-6 leading-relaxed tracking-wide">
          {description.split("").map((char, i) => (
            <motion.span key={`desc-${i}`} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.p>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="inline-block bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition-all cursor-pointer"
        >
          Projelerimi Gör
          
        </Link>
      </motion.div>

      {/* SVG */}
      <div className="flex-1 flex justify-center md:justify-end items-center max-w-[90%]">
        <BrushStrokeSvg />
      </div>

      {/* Arka plan efekti */}
      <div className="absolute top-4 right-6 w-40 h-40 bg-pink-400 opacity-20 blur-3xl rounded-full animate-pulse hidden md:block pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
