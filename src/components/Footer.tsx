import { getThemeClasses, ThemeVariant } from '../theme';
import { useState } from 'react';
import { X, Instagram, CheckCircle2, Loader2 } from 'lucide-react';

export default function Footer({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const errData = await response.json().catch(() => ({}));
        alert(`Error: ${errData.error || "Falta configurar la API Key de Resend en el servidor o Endpoint no encontrado."}`);
      }
    } catch (error) {
      alert("Error de conexión al enviar el formulario.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <footer className={`${theme.bgPage} border-t ${theme.borderSoft}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className={`flex h-6 w-6 items-center justify-center ${theme.bgPrimary} ${theme.rounded}`}>
                  <div className="w-2 h-2 border border-white rounded-sm rotate-45"></div>
                </div>
                <span className={`${theme.headingFont} text-lg font-bold tracking-tight ${theme.textPrimary}`}>
                  MUNDO EQUINO
                </span>
              </div>
              <p className={`text-sm leading-relaxed max-w-sm ${theme.textBody}`}>
                La plataforma para la gestión integral de criaderos de caballos: Paso Fino, Criollo Colombiano y polo.
              </p>
            </div>
            <div>
              <h4 className={`text-[10px] uppercase tracking-widest font-bold ${theme.textPrimary} mb-6`}>Plataforma</h4>
              <ul className={`space-y-4 text-xs font-semibold uppercase tracking-wider ${theme.textBody}`}>
                <li><a href="#caracteristicas" className={`hover:${theme.textHeading} transition-colors`}>Características</a></li>
                <li><a href="#precios" className={`hover:${theme.textHeading} transition-colors`}>Precios</a></li>
                <li><a href="https://app.mundo-equino.com/register" target="_blank" rel="noopener noreferrer" className={`hover:${theme.textHeading} transition-colors`}>Crear cuenta</a></li>
              </ul>
            </div>
            <div>
              <h4 className={`text-[10px] uppercase tracking-widest font-bold ${theme.textPrimary} mb-6`}>Legal & Contacto</h4>
              <ul className={`space-y-4 text-xs font-semibold uppercase tracking-wider ${theme.textBody}`}>
                <li><button onClick={() => setActiveModal('privacy')} className={`hover:${theme.textHeading} transition-colors`}>Privacidad</button></li>
                <li><button onClick={() => setActiveModal('terms')} className={`hover:${theme.textHeading} transition-colors`}>Términos</button></li>
                <li><button onClick={() => setActiveModal('contact')} className={`hover:${theme.textHeading} transition-colors`}>Contacto</button></li>
              </ul>
            </div>
          </div>
          <div className={`border-t ${theme.borderSoft} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
            <p className={`text-[9px] uppercase tracking-widest opacity-60 ${theme.textBody}`}>
              &copy; {new Date().getFullYear()} Mundo Equino. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 opacity-60">
              <span className={`text-[9px] uppercase tracking-widest font-bold ${theme.textBody}`}>Síguenos</span>
              <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram (Próximamente)" className={`${theme.textBody} hover:${theme.textHeading} transition-colors cursor-default`} title="Próximamente estaremos en Instagram">
                <Instagram size={18} />
              </a>
            </div>
            <div className={`text-[9px] uppercase tracking-widest font-bold opacity-60 ${theme.textBody}`}>
              Hecho con criadores, para criadores.
            </div>
          </div>
        </div>
      </footer>

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto ${theme.bgPage} ${theme.rounded} p-8 shadow-2xl`}>
            <button 
              onClick={() => setActiveModal(null)}
              className={`absolute top-6 right-6 ${theme.textBody} hover:${theme.textHeading} transition-colors`}
            >
              <X size={24} />
            </button>

            {activeModal === 'privacy' && (
              <div className="prose prose-sm max-w-none">
                <h2 className={`text-2xl font-bold mb-6 ${theme.textHeading} ${theme.headingFont}`}>Política de Privacidad</h2>
                <p className={`${theme.textBody} mb-4`}><strong>1. Información que recopilamos:</strong> Mundo Equino recopila información necesaria para la gestión de su criadero, incluyendo datos de los ejemplares (fotos de registros, genealogía), información del usuario y datos de uso de la plataforma. La funcionalidad de IA utiliza la información de los registros subidos para la extracción de datos.</p>
                <p className={`${theme.textBody} mb-4`}><strong>2. Uso de la información:</strong> Utilizamos su información exclusivamente para proporcionar y mejorar la plataforma, generar análisis predictivos sobre genética para usted, y mantener la seguridad de sus datos. Los datos de sus ejemplares no serán compartidos públicada ni vendidos a terceros.</p>
                <p className={`${theme.textBody} mb-4`}><strong>3. Seguridad:</strong> Empleamos medidas de encriptación y seguridad estándar de la industria para proteger el acceso no autorizado a los datos de sus criaderos y biometría equina.</p>
                <p className={`${theme.textBody} mb-4`}>Última actualización: Mayo 2026</p>
              </div>
            )}

            {activeModal === 'terms' && (
              <div className="prose prose-sm max-w-none">
                <h2 className={`text-2xl font-bold mb-6 ${theme.textHeading} ${theme.headingFont}`}>Términos y Condiciones</h2>
                <p className={`${theme.textBody} mb-4`}><strong>1. Aceptación:</strong> Al usar Mundo Equino, usted acepta estar vinculado por estos términos. Si no acepta estos términos, no debe utilizar la plataforma.</p>
                <p className={`${theme.textBody} mb-4`}><strong>2. Uso de la plataforma:</strong> Usted es responsable de la exactitud de los datos proporcionados, especialmente de las imágenes de registro suministradas a nuestra IA. La plataforma se ofrece como una herramienta para asistir en la gestión del criadero de equinos y predicciones genéticas; las decisiones técnicas finales son responsabilidad del criador.</p>
                <p className={`${theme.textBody} mb-4`}><strong>3. Planes de suscripción:</strong> El plan gratuito tiene una duración limitada de 30 días con acceso a módulos base. Las suscripciones pagas (Popular, Avanzado) se rigen según sus características anunciadas y pueden cancelarse en cualquier momento pero sin reembolso de fracciones de tiempo.</p>
                <p className={`${theme.textBody} mb-4`}><strong>4. Propiedad intelectual:</strong> Mundo Equino es propiedad intelectual de sus creadores y el código, diseño y algoritmos de IA no pueden ser copiados ni reproducidos.</p>
              </div>
            )}

            {activeModal === 'contact' && (
              <div>
                <h2 className={`text-2xl font-bold mb-6 ${theme.textHeading} ${theme.headingFont}`}>Contacto</h2>
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle2 size={48} className="text-emerald-500 mb-4" />
                    <h3 className={`text-xl font-bold mb-2 ${theme.textHeading}`}>¡Mensaje Enviado!</h3>
                    <p className={`${theme.textBody}`}>
                      Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSuccess(false);
                        setActiveModal(null);
                      }}
                      className={`mt-6 px-6 py-2 text-sm font-semibold ${theme.buttonPrimary} rounded-md`}
                    >
                      Cerrar
                    </button>
                  </div>
                ) : (
                  <>
                    <p className={`${theme.textBody} mb-6`}>Déjenos sus datos y nos comunicaremos a la brevedad con usted.</p>
                    <form 
                      onSubmit={handleContactSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.textBody}`}>Nombre</label>
                        <input type="text" name="name" required className={`w-full px-4 py-3 rounded-md bg-transparent border ${theme.borderSoft} ${theme.textHeading} focus:outline-none focus:ring-1 focus:ring-current`} placeholder="Su nombre o criadero" />
                      </div>
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.textBody}`}>Email</label>
                        <input type="email" name="email" required className={`w-full px-4 py-3 rounded-md bg-transparent border ${theme.borderSoft} ${theme.textHeading} focus:outline-none focus:ring-1 focus:ring-current`} placeholder="info@criadero.com" />
                      </div>
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.textBody}`}>Celular (Opcional)</label>
                        <input type="tel" name="phone" className={`w-full px-4 py-3 rounded-md bg-transparent border ${theme.borderSoft} ${theme.textHeading} focus:outline-none focus:ring-1 focus:ring-current`} placeholder="+57 300 000 0000" />
                      </div>
                      <div>
                        <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${theme.textBody}`}>Mensaje</label>
                        <textarea name="message" rows={4} required className={`w-full px-4 py-3 rounded-md bg-transparent border ${theme.borderSoft} ${theme.textHeading} focus:outline-none focus:ring-1 focus:ring-current`} placeholder="¿En qué podemos ayudarle?"></textarea>
                      </div>
                      <button type="submit" disabled={isSubmitting} className={`mt-4 w-full py-4 font-semibold text-sm flex items-center justify-center gap-2 ${theme.buttonPrimary} rounded-md transition-all disabled:opacity-70 disabled:cursor-not-allowed`}>
                        {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : null}
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
