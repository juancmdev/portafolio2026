import React from 'react'

const Skills = () => {
    const techSkills = [
        "HTML5", "CSS3", "JavaScript", "React", 
        "Tailwind CSS", "Git", "GitHub", "Vite"
      ];
  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título de la sección */}
        <h2 className="text-3xl font-bold text-white mb-2">
          Mis Habilidades 🛠️
        </h2>
        <p className="text-slate-400 mb-8">
          Tecnologías y herramientas con las que trabajo
        </p>

        {/* Lista de habilidades */}
        <div className="flex flex-wrap justify-center gap-3">
          {techSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-slate-800 text-sky-400 border border-slate-700 rounded-full font-medium shadow-sm hover:border-sky-500 hover:scale-105 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
