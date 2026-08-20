import { useRef, useState } from "react"

const Contact = () => {
    const formRef = useRef();
    const [ isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
    }

    setTimeout(() => {
        setIsSending(false);
        setIsSent(true);
        form.current.reset();
    }, 1500);

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
            {/* Título y descripción */}
            <h2 className="text-3xl font-bold text-white mb-2">
                ¡Hablemos!
            </h2>
            <p className="text-slate-400 mb-8">
                ¿Tienes un proyecto en mente o una propuesta laboral? Envíame un mensaje.
            </p>

            {/*Formulario*/}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                        Nombre
                    </label>
                    <input 
                        type="text"
                        name="user_name"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-2 bg slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                        Correo Electrónico
                    </label>
                    <input 
                        type="email" 
                        name="user_email" 
                        required
                        placeholder="tu@email.com"
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                        Mensaje
                    </label>
                    <textarea 
                        name="message"
                        rows="4"
                        required
                        placeholder="Escribe tu mensje aquí..."
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 transition-color"    
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3 bg-sky-500 hover:bg-sky-600 disabled:bg-slate-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-sky-500/20"
                >
                    {isSending ? 'Enviando...⏳' : 'Enviar Mensaje 🚀'}
                </button>

                {isSent && (
                    <p className="text-emerald-400 text-center text-sm mt-2">
                        ¡Mensaje enviado don éxito! Te responmderé pronto. 😊
                    </p>
                )}
            </form>
        </div>

    </section>
  )
}

export default Contact
