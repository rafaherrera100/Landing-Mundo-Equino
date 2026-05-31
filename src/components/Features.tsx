import { getThemeClasses, ThemeVariant } from '../theme';
import { motion } from 'motion/react';
import { 
  Database, 
  Sparkles, 
  Leaf, 
  Stethoscope, 
  Network, 
  Heart, 
  Syringe, 
  Activity, 
  Ruler, 
  PieChart,
  Dna,
  ClipboardList,
  Package
} from 'lucide-react';

const features = [
  { title: 'Inventario de Ejemplares', description: 'Ficha completa por caballo: fotos, genealogía, propietario e historial.', icon: Database },
  { title: 'Ingreso con IA', description: 'Registra un ejemplar subiendo una foto de su registro y la IA completa su perfil automáticamente.', icon: Sparkles },
  { title: 'Sanidad Veterinaria', description: 'Vacunaciones, tratamientos e historial médico completo por animal.', icon: Stethoscope },
  { title: 'Genética Predictiva IA', description: 'Banco genético impulsado por Inteligencia Artificial para predecir la probabilidad de éxito fenomenológico en los cruces.', icon: Dna },
  { title: 'Genética & Pedigree', description: 'Árbol genealógico, coeficiente de consanguinidad y selección de reproductores.', icon: Network },
  { title: 'Trazabilidad de Montas', description: 'Gestión total de reproductores, seguimiento de saltos y reportes automáticos de monta.', icon: ClipboardList },
  { title: 'Control de Alimentación', description: 'Planes nutricionales, raciones diarias y alertas de suministros.', icon: Leaf },
  { title: 'Gestión de Insumos', description: 'Control de inventario y costo de heno, concentrado y viruta en tiempo real.', icon: Package },
  { title: 'Reproducción', description: 'Ciclos, montas, gestaciones, partos y registro detallado de crías.', icon: Heart },
  { title: 'Purgas y Desparasitación', description: 'Calendario automático, alertas y registro de productos aplicados.', icon: Syringe },
  { title: 'Entrenamiento', description: 'Bitácora de sesiones, rendimiento, metas y progreso por ejemplar.', icon: Activity },
  { title: 'Alzada y Herrada', description: 'Control de medidas, historial de herrajes y recordatorios automáticos.', icon: Ruler },
  { title: 'Finanzas Multi-nivel', description: 'Control de gastos e ingresos detallado por ejemplar, sede y consolidado del criadero.', icon: PieChart }
];

export default function Features({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);

  return (
    <section id="caracteristicas" className={`${theme.bgPage} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className={`text-[10px] uppercase tracking-[0.3em] font-bold ${theme.textPrimary}`}>Plataforma integral</h2>
          <p className={`mt-2 text-3xl font-normal tracking-tight ${theme.textHeading} sm:text-4xl ${theme.headingFont}`}>
            Todo lo que tu criadero necesita, en un solo lugar.
          </p>
          <p className={`mt-6 text-lg leading-relaxed ${theme.textBody}`}>
            Trece módulos especializados pensados para la realidad del criador colombiano — de la trazabilidad y genética predictiva al balance financiero.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex flex-col ${theme.bgCard} p-8 border ${theme.borderSoft} hover:shadow-lg transition-all`}
                style={{ borderRadius: variant === 'classic' ? '2px' : variant === 'minimal' ? '0px' : '16px' }}
              >
                <dt className={`flex items-center gap-x-3 text-lg font-serif italic ${theme.textHeading}`}>
                  <div className={`flex h-12 w-12 items-center justify-center ${theme.rounded} ${theme.bgPrimarySoft}`}>
                    <feature.icon className={`h-5 w-5 ${theme.textPrimary}`} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className={`mt-4 flex flex-auto flex-col text-sm leading-relaxed ${theme.textBody}`}>
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
