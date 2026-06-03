import { useState } from 'react';
import { getThemeClasses, ThemeVariant } from '../theme';
import { motion, AnimatePresence } from 'motion/react';
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

const categories = [
  { id: 'ejemplares', name: 'Gestión de Ejemplares', icon: Database },
  { id: 'reproduccion', name: 'Genética & Reproducción', icon: Dna },
  { id: 'sanidad', name: 'Sanidad & Nutrición', icon: Stethoscope },
  { id: 'finanzas', name: 'Administración & Finanzas', icon: PieChart }
];

const featuresList = {
  ejemplares: [
    { title: 'Inventario de Ejemplares', description: 'Ficha completa por caballo: fotos, genealogía e historial.', icon: Database },
    { title: 'Ingreso Inteligente', description: 'Sube la foto del registro y la Inteligencia Artificial completará el perfil del animal en segundos.', icon: Sparkles },
    { title: 'Bitácora de Entrenamiento', description: 'Seguimiento de sesiones, rendimiento, establecimiento de metas y progreso deportivo.', icon: Activity },
    { title: 'Alzada y Herrada', description: 'Control de medidas, historial detallado de herrajes y recordatorios automáticos de cambios.', icon: Ruler },
  ],
  reproduccion: [
    { title: 'Genética Predictiva IA', description: 'Prepara el éxito del cruce con Modelos de IA analizando 3+ generaciones de yeguas y potros.', icon: Dna },
    { title: 'Trazabilidad de Montas', description: 'Control total de reproductores, servicios, envíos de semen y reportes oficiales.', icon: ClipboardList },
    { title: 'Árbol Genealógico', description: 'Explorador visual del árbol genealógico, análisis de consanguinidad y resultados de cruces históricos.', icon: Network },
    { title: 'Ciclos y Gestación', description: 'Reportes de montas, ecografías, alertas próximas de partos y registro detallado de las crías.', icon: Heart },
  ],
  sanidad: [
    { title: 'Historial Médico', description: 'Reportes de vacunaciones, tratamientos aplicados e historial clínico completo por cada animal.', icon: Stethoscope },
    { title: 'Planes Nutricionales', description: 'Programación de dietas, raciones diarias requeridas y alertas preventivas de suministros y raciones.', icon: Leaf },
    { title: 'Desparasitación', description: 'Calendario inteligente automático y registro riguroso de productos y purgas aplicadas.', icon: Syringe },
  ],
  finanzas: [
    { title: 'Control Multi-nivel', description: 'Manejo de ingresos, presupuestos y control de balance general y análisis de rentabilidad por ejemplar.', icon: PieChart },
    { title: 'Inventario de Insumos', description: 'Manejo de heno, cuido, concentrado y viruta con costeo en tiempo real para evitar desperdicios.', icon: Package },
  ]
};

export default function Features({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section id="caracteristicas" className={`${theme.bgPage} py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center mb-16">
          <h2 className={`text-[11px] uppercase tracking-[0.25em] font-bold ${theme.textPrimary}`}>Características Integradas</h2>
          <p className={`mt-3 text-3xl font-medium tracking-tight ${theme.textHeading} sm:text-4xl ${theme.headingFont}`}>
             Herramientas especializadas al alcance de un clic.
          </p>
          <p className={`mt-5 text-lg leading-relaxed ${theme.textBody}`}>
            Hemos organizado nuestra suite tecnológica en cuatro áreas fundamentales. Navega a través de cada pestaña para explorar las principales funcionalidades.
          </p>
        </div>

        {/* Tab Navigator */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-6 py-4 transition-all duration-300 font-medium whitespace-nowrap ${
                  isActive 
                    ? `${theme.bgPrimary} text-white shadow-xl scale-[1.02]` 
                    : `${theme.bgCard} ${theme.textHeading} border ${theme.borderSoft} hover:shadow-md hover:scale-[1.02]`
                }`}
                style={{ borderRadius: variant === 'classic' ? '2px' : variant === 'minimal' ? '0px' : '999px' }}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : theme.textPrimary}`} />
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* Active Category Content */}
        <div className="min-h-[380px] lg:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {featuresList[activeCategory as keyof typeof featuresList].map((feature) => (
                <div 
                  key={feature.title} 
                  className={`group flex flex-col justify-start ${theme.bgCard} p-8 border ${theme.borderSoft} hover:shadow-xl transition-all duration-300`}
                  style={{ borderRadius: variant === 'classic' ? '2px' : variant === 'minimal' ? '0px' : '24px' }}
                >
                  <dt className={`flex flex-col gap-y-4 text-xl font-medium ${theme.headingFont} ${theme.textHeading}`}>
                    <div className={`flex h-20 w-20 shrink-0 items-center justify-center ${theme.rounded} ${theme.bgPrimarySoft} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`h-10 w-10 ${theme.textPrimary}`} strokeWidth={1} />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className={`mt-3 flex flex-auto flex-col text-[15px] leading-relaxed ${theme.textBody}`}>
                    <p className="flex-auto opacity-90">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
