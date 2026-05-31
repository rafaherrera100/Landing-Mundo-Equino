import { getThemeClasses, ThemeVariant } from '../theme';
import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);

  return (
    <div className={`relative overflow-hidden ${variant === 'minimal' ? theme.bgSection : theme.bgPage} pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20`}>
      <div className={`absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none overflow-hidden`}>
         <span className={`${theme.headingFont} text-[40rem] leading-none italic ${theme.textPrimary}`}>M</span>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3 py-1 mb-6 ${theme.bgCard} ${theme.textPrimary} border ${theme.borderSoft} text-[9px] uppercase tracking-widest font-bold ${theme.rounded}`}
            >
              <span className={`flex h-2 w-2 rounded-full ${theme.bgPrimary}`}></span>
              Nuevo: Ingreso de ejemplares con IA
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`${theme.headingFont} text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight ${theme.textHeading} mb-6 leading-[1.1]`}
            >
              Gestiona tu criadero con la <br className="hidden lg:block"/><span className={"italic font-normal " + theme.textPrimary}>precisión</span> que tus ejemplares merecen.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-lg sm:text-lg ${theme.textBody} mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed`}
            >
              La plataforma todo-en-uno para criadores colombianos: IA, genética, sanidad, reproducción, entrenamiento y finanzas por ejemplar — Paso Fino, Criollo Colombiano y polo.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a href="https://app.mundo-equino.com/register" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-6 py-4 text-base ${theme.rounded} ${theme.buttonPrimary}`}>
                Comenzar gratis — 30 días
              </a>
              <a href="#caracteristicas" className={`flex items-center justify-center gap-2 px-6 py-4 text-base ${theme.rounded} ${theme.buttonSecondary}`}>
                Ver características
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative mx-auto lg:ml-auto flex justify-end"
          >
            {/* Close-up cinematic horse presentation */}
            <div className={`relative w-full lg:w-[90%] h-[400px] sm:h-[500px] lg:h-[650px] ${theme.rounded} ring-1 ${theme.borderSoft.replace('border-', 'ring-')} overflow-hidden bg-[#2a241e]`}>
              <img 
                src="https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&w=1000&q=80" 
                alt="Detalle de caballo" 
                className={`w-full h-full object-cover opacity-90 sepia-[.2] contrast-110 saturate-[1.2] hover:scale-105 transition-transform duration-1000`}
              />
              {/* Subtle inner shadow for luxury feel */}
              <div className={`absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] pointer-events-none`}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
