import { useState } from 'react';
import { getThemeClasses, ThemeVariant } from '../theme';
import { Check, X, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const plans = [
  { 
    name: 'Gratuito', 
    price: '$0', 
    description: 'Tiempo limitado de 30 días para explorar la plataforma.', 
    features: ['Tiempo limitado de 30 días', 'IA para ingreso de datos', 'Acceso a los módulos base', 'Soporte por email'], 
    cta: 'Comenzar Gratis', 
    link: 'https://app.mundo-equino.com/register',
    popular: false 
  },
  { 
    name: 'Criador Élite', 
    price: 'U$ 39', 
    description: 'Todo lo necesario para hacer seguimiento completo a tu criadero.', 
    features: ['Tiempo ilimitado', 'Ejemplares ilimitados', 'Todos los módulos activos', 'IA para lectura de registros por foto', 'Soporte prioritario'], 
    cta: 'Elegir Élite', 
    link: '#',
    isContactForm: true,
    popular: true 
  },
  { 
    name: 'Gran Campeón', 
    price: 'U$ 79', 
    description: 'Para operaciones conectadas con predicción y manejo genético.', 
    features: ['IA para simulación de genética', 'Manejo inteligente de reproductores', 'Todo lo del plan Élite', 'Multi-usuario / equipo', 'Análisis financiero avanzado'], 
    cta: 'Elegir Campeón',
    link: '#',
    isContactForm: true,
    popular: false 
  }
];

export default function Pricing({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);
  
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const openForm = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
    setStatus('idle');
    setFormData({ name: '', email: '', phone: '', message: `Hola, estoy interesado en adquirir el ${planName}.` });
  };

  const closeForm = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error?.message || data.error || 'Ocurrió un error al enviar tu solicitud.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Hubo un problema de red. Por favor intenta de nuevo.');
    }
  };

  return (
    <section id="precios" className={`${theme.bgPage} py-12 sm:py-16 lg:py-20 relative`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className={`text-[10px] uppercase tracking-[0.3em] font-bold ${theme.textPrimary}`}>Precios justos</h2>
          <p className={`mt-2 text-3xl font-normal tracking-tight ${theme.textHeading} sm:text-4xl ${theme.headingFont}`}>
            Un plan para cada criadero.
          </p>
          <p className={`mt-6 text-lg leading-8 ${theme.textBody}`}>
            Comienza gratis. Escala cuando tu operación lo necesite. Sin permanencia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col justify-between p-10 ${theme.bgCard} border ${
                plan.popular ? `border-current border-2 shadow-2xl relative ${theme.textPrimary}` : `${theme.borderSoft} shadow-sm`
              }`}
              style={{ borderRadius: variant === 'classic' ? '2px' : variant === 'minimal' ? '0px' : '24px' }}
            >
              {plan.popular && (
                <div className={`absolute top-0 right-0 -translate-y-1/2 translate-x-0 px-4 py-1 text-[9px] uppercase tracking-widest font-bold text-white ${theme.bgPrimary} ${theme.rounded}`}>
                  Recomendado
                </div>
              )}
              
              <div>
                <h3 className={`text-2xl font-normal leading-8 ${theme.textHeading} ${theme.headingFont}`}>
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-x-2">
                  <span className={`text-4xl font-normal tracking-tight ${theme.textHeading} ${theme.headingFont}`}>
                    {plan.price}
                  </span>
                  {plan.price !== '$0' && (
                    <span className={`text-sm font-semibold leading-6 ${theme.textBody} ${plan.popular && '!text-current opacity-70'}`}>
                      /mes
                    </span>
                  )}
                </div>
                <p className={`mt-4 text-sm leading-6 ${theme.textBody} ${plan.popular && '!text-current opacity-70'}`}>{plan.description}</p>
                <ul className={`mt-8 space-y-4 text-sm leading-6 ${theme.textBody} ${plan.popular && '!text-current opacity-90'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className={`h-5 w-5 flex-none ${theme.textPrimary}`} strokeWidth={1.5} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {plan.isContactForm ? (
                <button
                  onClick={() => openForm(plan.name)}
                  className={`mt-10 px-6 py-4 text-center block w-full transition-all duration-300 ${theme.rounded} ${
                    plan.popular ? theme.buttonPrimary : theme.buttonSecondary
                  }`}
                >
                  {plan.cta}
                </button>
              ) : (
                <a
                  href={plan.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`mt-10 px-6 py-4 text-center block transition-all duration-300 ${theme.rounded} ${
                    plan.popular ? theme.buttonPrimary : theme.buttonSecondary
                  }`}
                >
                  {plan.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Dialog for Contact Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeForm}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative z-10 w-full max-w-lg overflow-hidden border ${theme.bgCard} ${theme.borderSoft} shadow-2xl`}
              style={{ borderRadius: variant === 'classic' ? '4px' : variant === 'minimal' ? '0px' : '24px' }}
            >
              <div className="p-8">
                <button 
                  onClick={closeForm}
                  className={`absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 transition-colors ${theme.textBody}`}
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h3 className={`text-2xl font-medium tracking-tight mb-2 ${theme.headingFont} ${theme.textHeading}`}>
                  Solicitar {selectedPlan}
                </h3>
                <p className={`text-sm mb-6 ${theme.textBody}`}>
                  Déjanos tus datos y nos pondremos en contacto contigo a la brevedad para activar tu plan.
                </p>

                {status === 'success' ? (
                  <div className={`p-6 text-center rounded-xl bg-green-50 text-green-800 border border-green-200`}>
                    <Check className="w-12 h-12 mx-auto text-green-600 mb-3" />
                    <h4 className="text-lg font-medium mb-2">¡Solicitud enviada!</h4>
                    <p className="text-sm">Hemons recibido tu información. Muy pronto tendrás noticias nuestras.</p>
                    <button 
                      onClick={closeForm}
                      className="mt-6 font-medium text-green-700 hover:text-green-800 underline"
                    >
                      Cerrar
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme.textHeading}`}>Nombre completo</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full px-4 py-3 bg-transparent border ${theme.borderSoft} focus:border-current focus:ring-1 focus:ring-current outline-none transition-all`}
                        style={{ borderRadius: variant === 'classic' ? '2px' : variant === 'minimal' ? '0px' : '12px' }}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme.textHeading}`}>Correo</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className={`w-full px-4 py-3 bg-transparent border ${theme.borderSoft} focus:border-current focus:ring-1 focus:ring-current outline-none transition-all`}
                          style={{ borderRadius: variant === 'classic' ? '2px' : variant === 'minimal' ? '0px' : '12px' }}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme.textHeading}`}>Celular</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className={`w-full px-4 py-3 bg-transparent border ${theme.borderSoft} focus:border-current focus:ring-1 focus:ring-current outline-none transition-all`}
                          style={{ borderRadius: variant === 'classic' ? '2px' : variant === 'minimal' ? '0px' : '12px' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme.textHeading}`}>Mensaje</label>
                      <textarea 
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className={`w-full px-4 py-3 bg-transparent border ${theme.borderSoft} focus:border-current focus:ring-1 focus:ring-current outline-none transition-all resize-none`}
                        style={{ borderRadius: variant === 'classic' ? '2px' : variant === 'minimal' ? '0px' : '12px' }}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-600 text-sm">{errorMessage}</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className={`w-full mt-2 py-4 px-6 font-medium flex items-center justify-center gap-2 transition-all ${theme.buttonPrimary} disabled:opacity-70`}
                      style={{ borderRadius: variant === 'classic' ? '2px' : variant === 'minimal' ? '0px' : '12px' }}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        'Enviar Solicitud'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
