import { getThemeClasses, ThemeVariant } from '../theme';

const testimonials = [
  { quote: "Llevábamos las fichas en cuadernos. Ahora cada potro tiene su historial completo, su pedigree y sus costos en un solo lugar. Cambió por completo el criadero.", author: "Criador de Paso Fino" },
  { quote: "La IA me ahorra horas registrando ejemplares. Subo una foto del registro y la ficha queda lista. Para un criadero de 80 caballos es invaluable.", author: "Criador de Criollo Colombiano" },
  { quote: "El módulo de reproducción y el árbol genealógico nos permiten planear cruzamientos con criterio. Y el control financiero por ejemplar fue la cereza del pastel.", author: "Administrador de Pesebrera" }
];

export default function Testimonials({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${theme.bgPrimary} ${variant === 'classic' ? 'text-amber-50' : variant === 'minimal' ? 'text-white' : 'text-emerald-50'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className={`text-3xl font-normal tracking-tight text-white sm:text-4xl ${theme.headingFont}`}>
            Hecho con criadores, <span className="italic">para criadores.</span>
          </h2>
          <p className={`mt-4 text-sm tracking-[0.2em] uppercase font-semibold opacity-70`}>
            Plataforma colombiana para la gestión integral.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className={`p-10 bg-white/5 backdrop-blur-sm border border-white/10 ${theme.rounded}`}
            >
              <div className="flex flex-col h-full justify-between">
                <blockquote className={`text-lg mb-8 font-normal leading-relaxed text-white ${theme.headingFont}`}>
                  "{t.quote}"
                </blockquote>
                <cite className={`text-[10px] tracking-widest uppercase font-bold text-white/50 not-italic`}>
                  — {t.author}
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
