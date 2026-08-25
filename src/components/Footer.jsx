const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Firma y año */}
        <p className="text-cente sm:text-left">
        ©{currentYear} JuanCMDev. Construido con React y ⚛️ y Tailwind CSS 🎨
        </p>

        {/* Enlaces a redes Sociales */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/juancmdev"
            target="blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
