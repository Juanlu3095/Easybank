export const allowed_locales = ['en', 'es'] as const

export type Locale = typeof allowed_locales[number];

// If allowed_locales includes value, tells the value to return from Locale
export function isLocale(value: string): value is Locale {
    return allowed_locales.some(locale => locale === value);
}