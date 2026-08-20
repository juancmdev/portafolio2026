import React from 'react'

const Projects = () => {
    // Lista de proyectos almacenados como objetos de JavaScript
  const projectsList = [
    {
      title: "Proyecto 1: Dashboard de Clima 🌤️",
      description: "Aplicación interactiva que consume una API meteorológica para mostrar el pronóstico del tiempo en tiempo real.",
      technologies: ["React", "Tailwind CSS", "REST API"],
      image: "https://res.cloudinary.com/dgaqbo3m2/image/upload/v1756247064/words_of_the_week_bzbds4.jpg",
      githubUrl: "https://github.com/tu-usuario/proyecto-clima",
      demoUrl: "https://proyecto-clima.vercel.app"
    },
    {
      title: "Proyecto 2: E-commerce Landing Page 🛒",
      description: "Página de aterrizaje responsiva para una tienda en línea con carrito de compras simulado y filtros de productos.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: "https://res.cloudinary.com/dgaqbo3m2/image/upload/v1756247035/personal_pronouns_tdyfez.jpg",
      githubUrl: "https://github.com/tu-usuario/proyecto-ecommerce",
      demoUrl: "https://proyecto-ecommerce.vercel.app"
    }
  ];
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Título de la sección */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Proyectos Destacados 📂
        </h2>
        <p className="text-slate-400 text-center mb-12">
          Algunos de los trabajos que he construido recientemente
        </p>

        {/* Cuadrícula (Grid) de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-6 overflow-hidden flex flex-col justify-between hover:border-sky-500/50 transition-all shadow-lg"
            >
              {/* Imagen del proyecto 📸 */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                {/* Lista interna de tecnologías del proyecto */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2.5 py-1 bg-slate-900 text-sky-400 rounded-md font-medium border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botones de enlaces del proyecto */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Ver Demo 🚀
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
