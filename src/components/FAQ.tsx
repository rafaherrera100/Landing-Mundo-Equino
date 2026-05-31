import { useState } from 'react';
import { getThemeClasses, ThemeVariant } from '../theme';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "¿Cómo funciona la IA para leer los registros de mis ejemplares?",
    answer: "Nuestra inteligencia artificial está entrenada específicamente para reconocer e interpretar la estructura de los registros de asociaciones equinas. Al subir una foto desde tu celular o computadora, el sistema extrae automáticamente la información clave del ejemplar y construye su árbol genealógico, ahorrándote horas de escritura manual."
  },
  {
    question: "¿Están seguros los datos de mis criaderos y fotos de registro?",
    answer: "Absolutamente. La privacidad es nuestra prioridad. Todos los datos, fotos y registros se almacenan en servidores con encriptación de grado bancario. Tu información es confidencial, 100% privada para tu cuenta y nunca será compartida públicamente ni vendida a terceros."
  },
  {
    question: "¿Cómo funciona el periodo de prueba y los planes de pago?",
    answer: "Ofrecemos una prueba gratuita de 30 días para que experimentes el valor de la plataforma. Luego, puedes pasar a nuestro plan Popular que te da acceso ilimitado a todas las herramientas (incluida la IA y el cargue infinito de ejemplares). No tenemos cláusulas de permanencia, por lo que puedes cancelar tu suscripción en cualquier momento."
  },
  {
    question: "¿Qué pasa si cometo un error o necesito editar un dato post-IA?",
    answer: "El sistema siempre te permitirá previsualizar los datos que la Inteligencia Artificial encontró antes de guardarlos. Si identificas algún error de lectura debido a una foto borrosa, podrás editarlo manualmente de forma muy sencilla."
  }
];

export default function FAQ({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas-frecuentes" className={`py-12 sm:py-16 lg:py-20 ${theme.bgSection}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className={`text-[10px] uppercase tracking-[0.3em] font-bold ${theme.textPrimary}`}>Preguntas Frecuentes</h2>
          <p className={`mt-2 text-3xl font-normal tracking-tight ${theme.textHeading} sm:text-4xl ${theme.headingFont}`}>
            Resolvemos tus dudas
          </p>
          <p className={`mt-6 text-lg leading-8 ${theme.textBody}`}>
            Todo lo que necesitas saber sobre Mundo Equino, la seguridad de tu información y nuestra tecnología IA.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-800">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex w-full items-center justify-between text-left focus:outline-none group`}
              >
                <span className={`text-lg font-medium leading-7 ${theme.textHeading} group-hover:${theme.textPrimary} transition-colors`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex h-7 items-center`}>
                  <ChevronDown
                    className={`h-5 w-5 ${theme.textPrimary} transition-transform duration-300 ${
                      openIndex === index ? '-rotate-180' : 'rotate-0'
                    }`}
                  />
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className={`mt-4 text-base leading-7 ${theme.textBody} pr-12`}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
