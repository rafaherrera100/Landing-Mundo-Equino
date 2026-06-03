import { getThemeClasses, ThemeVariant } from '../theme';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const steps = [
  { title: 'Regístrate gratis', description: 'Crea tu cuenta y configura tu criadero en menos de 2 minutos.', number: '1' },
  { title: 'Ingresa tus ejemplares', description: 'Carga tus caballos manualmente o deja que la IA complete sus fichas.', number: '2' },
  { title: 'Gestiona el criadero', description: 'Sanidad, reproducción, finanzas y reportes — desde un solo lugar.', number: '3' }
];

export default function HowItWorks({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);

  return (
    <section id="como-funciona" className={`py-16 sm:py-20 ${theme.bgSection} overflow-hidden`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center mb-14">
          <h2 className={`text-[11px] uppercase tracking-[0.25em] font-bold ${theme.textPrimary} mb-3`}>Flujo de Trabajo</h2>
          <h2 className={`text-3xl font-medium tracking-tight ${theme.textHeading} sm:text-4xl ${theme.headingFont}`}>
            Tres pasos hacia tu criadero digital
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="absolute top-10 left-[15%] right-[15%] h-[2px] hidden md:block bg-gradient-to-r from-transparent via-current to-transparent opacity-10"></div>
          
          {/* Mobile Connecting Line */}
          <div className="absolute left-[40px] md:hidden top-[10%] bottom-[10%] w-[2px] bg-gradient-to-b from-transparent via-current to-transparent opacity-10"></div>

          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative flex md:flex-col items-center md:text-center gap-6 md:gap-5 group flex-1"
              >
                <div className={`shrink-0 flex h-20 w-20 items-center justify-center ${theme.bgPage} rounded-full border shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300 z-10 ${theme.borderSoft}`}>
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full border border-dashed ${theme.borderSoft}`}>
                    <span className={`text-xl font-medium ${theme.textPrimary} ${theme.headingFont}`}>{step.number}</span>
                  </div>
                </div>
                
                <div className="flex-1 md:pt-1">
                  <h3 className={`mb-2 text-lg font-medium ${theme.textHeading} ${theme.headingFont}`}>{step.title}</h3>
                  <p className={`text-[15px] ${theme.textBody} leading-relaxed max-w-[260px] md:mx-auto opacity-90`}>{step.description}</p>
                </div>
                
                {/* Desktop arrows */}
                {index < steps.length - 1 && (
                  <div className={`absolute top-10 -right-6 hidden lg:block opacity-20 translate-x-1/2 -translate-y-1/2`}>
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
