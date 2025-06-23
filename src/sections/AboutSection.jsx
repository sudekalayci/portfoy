

const aboutText = [
  "Merhaba! Ben Sude Kalaycı. Bandırma Onyedi Eylül Üniversitesi Web Tasarımı ve Kodlama bölümü mezunuyum. Frontend alanında kendimi geliştiriyor ve HTML, CSS, JavaScript, jQuery, React, Tailwind CSS ve Bootstrap gibi teknolojilerle modern web projeleri üretiyorum.",
  "Projelerimde sadece kodlamayı değil, aynı zamanda tasarımı da kendim yapıyorum. Kullanıcı odaklı, estetik ve işlevsel arayüzler oluşturmayı seviyorum.",
  "Yeni teknolojileri öğrenmeye ve her gün kendime bir şeyler katmaya devam ediyorum.",
];


const AboutSection = () => {

  return (
    <section
      id="about"
      className="min-h-screen max-w-6xl mx-auto px-6 py-16 flex flex-col gap-16 text-white"
    >
      {/* Üst: Fotoğraf ve Yazı */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 aspect-square rounded-lg overflow-hidden shadow-md border border-gray-300/20">
          <img
            src="/sudeKalayci.jpg"
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

      

    </section>
  );
};

export default AboutSection;
