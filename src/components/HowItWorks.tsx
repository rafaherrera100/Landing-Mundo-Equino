import { getThemeClasses, ThemeVariant } from '../theme';
import { motion } from 'motion/react';

const steps = [
  { title: 'Regístrate gratis', description: 'Crea tu cuenta y configura tu criadero en menos de 2 minutos.', number: '01' },
  { title: 'Ingresa tus ejemplares', description: 'Carga tus caballos manualmente o deja que la IA complete sus fichas.', number: '02' },
  { title: 'Gestiona todo el criadero', description: 'Sanidad, reproducción, finanzas y reportes — desde un solo lugar.', number: '03' }
];

export default function HowItWorks({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);

  return (
    <section id="como-funciona" className={`py-12 sm:py-16 lg:py-20 ${theme.bgSection}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className={`text-3xl font-normal tracking-tight ${theme.textHeading} sm:text-4xl ${theme.headingFont}`}>
            Tres pasos hasta tu criadero digital.
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-12 left-0 w-full h-[1px] bg-black/5 hidden lg:block -z-10"></div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className={`mb-6 mx-auto flex h-24 w-24 items-center justify-center ${theme.bgPage} rounded-full border-4 ${theme.borderSoft} shadow-sm`}>
                  <span className={`text-2xl font-serif italic ${theme.textPrimary}`}>{step.number}</span>
                </div>
                <h3 className={`mb-4 text-xl font-normal ${theme.textHeading} ${theme.headingFont}`}>{step.title}</h3>
                <p className={`text-sm ${theme.textBody} leading-relaxed max-w-xs mx-auto`}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
