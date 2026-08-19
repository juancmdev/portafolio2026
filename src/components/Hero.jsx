const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Saludo inicial */}
        <p className="text-sky-400 font-semibold tracking-wide uppercase mb-3">
          Hola! bienvenido a mi portafolio
        </p>

        {/* Nombree principal */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
          Soy <span className="text-sky-400">Juan Carlos Moreno</span>
        </h1>

        {/* Rol / Especialidad */}
        <h2 className="text-2xl sm:text-3xl text-slate-300 font-medium mb-6">
          Desarrollador Frontend & Entusiasta Web 💻
        </h2>

        {/* Breve descripción */}
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Me apasiona crear experiencias web modernas, interactivas y
          funcionales. Me especializo en construir interfaces limpias con{" "}
          <span className="text-slate-200 font-semibold">React</span> y{" "}
          <span className="text-slate-200 font-semibold">Tailwind CSS</span>.
        </p>

        {/* Botones de acción (CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="projects"
            className="w-full sm:w-auto px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors shadow-sky-500/20"
          >
            Ver Proyectos 🚀
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition-colors bg-slate-800/50"
          >
            Contáctame ✉️
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
