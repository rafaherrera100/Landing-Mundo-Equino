import { getThemeClasses, ThemeVariant } from '../theme';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const plans = [
  { name: 'Gratuito', price: '$0', description: 'Comienza sin costo y explora la plataforma.', features: ['Hasta 10 caballos', 'Acceso a todos los módulos', 'IA limitada', 'Soporte por email'], cta: 'Comenzar Gratis', popular: false },
  { name: 'Esencial', price: 'Popular', description: 'Todo lo necesario para crecer tu criadero.', features: ['Caballos ilimitados', 'Todos los módulos activos', 'IA ilimitada', 'Reportes y exportación PDF', 'Soporte prioritario'], cta: 'Elegir Esencial', popular: true },
  { name: 'Profesional', price: 'Avanzado', description: 'Para operaciones y equipos grandes.', features: ['Todo lo del plan Esencial', 'Multi-usuario / equipo', 'API de integración', 'Genética avanzada', 'Análisis financiero avanzado', 'Soporte dedicado WhatsApp'], cta: 'Elegir Profesional', popular: false }
];

export default function Pricing({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);

  return (
    <section id="precios" className={`${theme.bgPage} py-24 sm:py-32`}>
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
                  <span className={`text-4xl font-normal tracking-tight ${theme.textHeading} ${theme.headingFont} italic`}>{plan.price}</span>
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
              <a
                href="https://app.mundo-equino.com/register"
                target="_blank" 
                rel="noopener noreferrer"
                className={`mt-10 px-6 py-4 text-center block ${
                  plan.popular 
                    ? theme.buttonPrimary 
                    : theme.buttonSecondary
                } ${theme.rounded}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
