export const defaultLocale = 'ru';

export const locales = {
  ru: { code: 'ru', name: 'Русский' },
  en: { code: 'en', name: 'English' },
  kk: { code: 'kk', name: 'Қазақша' },
} as const;

export type Locale = keyof typeof locales;

export const defaultCountry = 'RU';
