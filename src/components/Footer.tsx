import { getThemeClasses, ThemeVariant } from '../theme';

export default function Footer({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);

  return (
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
              <li><a href="#" className={`hover:${theme.textHeading} transition-colors`}>Privacidad</a></li>
              <li><a href="#" className={`hover:${theme.textHeading} transition-colors`}>Términos</a></li>
              <li><a href="#" className={`hover:${theme.textHeading} transition-colors`}>Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className={`border-t ${theme.borderSoft} pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}>
          <p className={`text-[9px] uppercase tracking-widest opacity-60 ${theme.textBody}`}>
            &copy; {new Date().getFullYear()} Mundo Equino. Todos los derechos reservados.
          </p>
          <div className={`text-[9px] uppercase tracking-widest font-bold opacity-60 ${theme.textBody}`}>
            Hecho con criadores, para criadores.
          </div>
        </div>
      </div>
    </footer>
  );
}
