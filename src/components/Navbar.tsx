import { getThemeClasses, ThemeVariant } from '../theme';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ variant }: { variant: ThemeVariant }) {
  const theme = getThemeClasses(variant);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 w-full border-b ${theme.borderSoft} ${theme.bgPage} backdrop-blur-sm bg-opacity-80 shrink-0`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center ${theme.bgPrimary} ${theme.rounded}`}>
              <div className="w-3 h-3 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className={`${theme.headingFont} text-xl font-bold tracking-tight ${theme.textPrimary}`}>
              Mundo Equino
            </span>
          </div>

          <div className={`hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.2em] font-semibold ${theme.textBody}`}>
            <a href="#caracteristicas" className={`hover:${theme.textHeading} transition-colors border-b border-transparent hover:border-current pb-1`}>Características</a>
            <a href="#como-funciona" className={`hover:${theme.textHeading} transition-colors border-b border-transparent hover:border-current pb-1`}>Cómo funciona</a>
            <a href="#precios" className={`hover:${theme.textHeading} transition-colors border-b border-transparent hover:border-current pb-1`}>Precios</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://app.mundo-equino.com" target="_blank" rel="noopener noreferrer" className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${theme.textBody} hover:${theme.textHeading} transition-colors`}>Iniciar sesión</a>
            <a href="https://app.mundo-equino.com/register" target="_blank" rel="noopener noreferrer" className={`px-5 py-2 ${theme.rounded} ${theme.buttonPrimary}`}>Pruébalo gratis</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={theme.textBody}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden border-b ${theme.borderSoft} ${theme.bgPage} px-4 py-4 shadow-sm`}>
          <div className={`flex flex-col space-y-4 text-[10px] uppercase tracking-[0.2em] font-semibold ${theme.textBody}`}>
            <a href="#caracteristicas" className={`hover:${theme.textHeading}`}>Características</a>
            <a href="#como-funciona" className={`hover:${theme.textHeading}`}>Cómo funciona</a>
            <a href="#precios" className={`hover:${theme.textHeading}`}>Precios</a>
            <hr className={theme.borderSoft} />
            <a href="https://app.mundo-equino.com" target="_blank" rel="noopener noreferrer" className={`hover:${theme.textHeading}`}>Iniciar sesión</a>
            <a href="https://app.mundo-equino.com/register" target="_blank" rel="noopener noreferrer" className={`text-center px-4 py-2 ${theme.rounded} ${theme.buttonPrimary}`}>Pruébalo gratis</a>
          </div>
        </div>
      )}
    </nav>
  );
}
