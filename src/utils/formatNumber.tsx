export type CurrencyUnion = 'USD' | 'CAD' | 'EUR' | 'AED' | 'MAD' | 'RUB' | 'SAR' | 'CNY' | 'JPY'

export type Language = 'en' | 'fr' | 'ar' | 'es' | 'zh' | 'ja' | 'ru' | 'de'

interface FormatPrice {
  language?: Language
  currency?: CurrencyUnion
  number: number
}

export function formatPrice({ language = 'en', currency = 'USD', number }: FormatPrice) {
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency,
  }).format(number)
}
