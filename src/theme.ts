export type ThemeVariant = 'modern' | 'classic' | 'minimal';

export interface ThemeClasses {
  bgPrimary: string;
  bgPrimarySoft: string;
  textPrimary: string;
  borderPrimary: string;
  headingFont: string;
  rounded: string;
  ringPrimary: string;
  buttonPrimary: string;
  buttonSecondary: string;
  bgPage: string;
  bgSection: string;
  bgCard: string;
  textHeading: string;
  textBody: string;
  borderSoft: string;
}

export const getThemeClasses = (variant: ThemeVariant): ThemeClasses => {
  if (variant === 'minimal') {
    return {
      bgPrimary: 'bg-[#4B3621]',
      bgPrimarySoft: 'bg-[#4B3621]/5',
      textPrimary: 'text-[#4B3621]',
      borderPrimary: 'border-[#4B3621]/10',
      headingFont: 'font-serif',
      rounded: 'rounded-none',
      ringPrimary: 'focus:ring-[#4B3621]',
      buttonPrimary: 'bg-[#4B3621] hover:bg-[#3A2A1A] text-white shadow-xl shadow-[#4B3621]/20 text-[10px] uppercase tracking-[0.2em] font-bold transition-all',
      buttonSecondary: 'bg-white border border-[#4B3621]/10 text-[#4B3621] hover:bg-[#FDFCFB] text-[10px] uppercase tracking-[0.2em] font-bold transition-all',
      bgPage: 'bg-[#FDFCFB]',
      bgSection: 'bg-[#E5E1DA]',
      bgCard: 'bg-[#F7F5F2]',
      textHeading: 'text-[#2A2A2A]',
      textBody: 'text-gray-600',
      borderSoft: 'border-[#4B3621]/10',
    };
  }
  if (variant === 'classic') {
    return {
      bgPrimary: 'bg-amber-900',
      bgPrimarySoft: 'bg-amber-50',
      textPrimary: 'text-amber-900',
      borderPrimary: 'border-amber-900',
      headingFont: 'font-serif',
      rounded: 'rounded-none sm:rounded-sm',
      ringPrimary: 'focus:ring-amber-900',
      buttonPrimary: 'bg-amber-900 hover:bg-amber-950 text-amber-50 shadow-md font-medium tracking-wide transition-all uppercase text-sm',
      buttonSecondary: 'bg-transparent border border-amber-900 text-amber-900 hover:bg-amber-50 font-medium tracking-wide transition-all uppercase text-sm',
      bgPage: 'bg-stone-50',
      bgSection: 'bg-stone-100',
      bgCard: 'bg-white',
      textHeading: 'text-stone-900',
      textBody: 'text-stone-700',
      borderSoft: 'border-stone-200',
    };
  }
  return {
    bgPrimary: 'bg-emerald-600',
    bgPrimarySoft: 'bg-emerald-50',
    textPrimary: 'text-emerald-700',
    borderPrimary: 'border-emerald-600',
    headingFont: 'font-display',
    rounded: 'rounded-xl sm:rounded-2xl',
    ringPrimary: 'focus:ring-emerald-500',
    buttonPrimary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg font-semibold transition-all',
    buttonSecondary: 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold shadow-sm transition-all',
    bgPage: 'bg-white',
    bgSection: 'bg-slate-50',
    bgCard: 'bg-white',
    textHeading: 'text-slate-900',
    textBody: 'text-slate-600',
    borderSoft: 'border-slate-100',
  };
};
