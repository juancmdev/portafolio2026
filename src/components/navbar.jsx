export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Nombre */}
        <a href="#" className="text-xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
          &lt;MiPortafolio /&gt;
        </a>

        {/* Enlaces de navegación */}
        <ul className="flex space-x-6 text-slate-300 font-medium">
          <li>
            <a href="#about" className="hover:text-sky-400 transition-colors">Sobre mí</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Proyectos</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Habilidades</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

