import { DateTimeFormatOptions } from './dateTimeFormatOptions.type'

export function formatDate(date: Date, options: DateTimeFormatOptions = {}, location: string = 'fr') {
  return new Intl.DateTimeFormat(location, options).format(date)
}

export function getTime(date: Date, options: DateTimeFormatOptions = {}, location: string = 'fr') {
  return new Intl.DateTimeFormat(location, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    ...options,
  }).format(date)
}

interface GetDateType {
  years?: number
  month?: number
  days?: number
  hours?: number
  minutes?: number
}

export function getDate({
  years = 0,
  month = 0,
  days = 0,

  hours = 0,
  minutes = 0,
}: GetDateType) {
  const date = new Date()
  if (years) {
    date.setFullYear(date.getFullYear() + years)
  }
  if (month) {
    date.setMonth(date.getMonth() + month)
  }
  if (days) {
    date.setDate(date.getDate() + days)
  }
  if (hours) {
    date.setHours(date.getHours() + hours)
  }
  if (minutes) {
    date.setMinutes(date.getMinutes() + minutes)
  }
  return date
}

export function getTimeAgo(timestamp: Date, locale = 'en') {
  let value
  const diff = (new Date().getTime() - timestamp.getTime()) / 1000
  const minutes = Math.floor(diff / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

  if (years > 0) {
    value = rtf.format(0 - years, 'year')
  } else if (months > 0) {
    value = rtf.format(0 - months, 'month')
  } else if (days > 0) {
    value = rtf.format(0 - days, 'day')
  } else if (hours > 0) {
    value = rtf.format(0 - hours, 'hour')
  } else if (minutes > 0) {
    value = rtf.format(0 - minutes, 'minute')
  } else {
    value = rtf.format(0 - diff, 'second')
  }
  return value
}

export function getDateFormat(timestamp: Date, locale = 'en') {
  const diff = (new Date().getTime() - timestamp.getTime()) / 1000

  const hours = Math.floor(diff / 3600)
  const days = Math.floor(hours / 24)
  const years = Math.floor(days / 30 / 12)
  const dfs = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: 'numeric',
  })
  const format = dfs.format(timestamp)

  if (years > 0) {
    const dfs = new Intl.DateTimeFormat(locale, {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    })
    return dfs.format(timestamp)
  } else if (days > 0) {
    const dfs = new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
    })
    return dfs.format(timestamp)
  } else if (hours > 0) {
    return format
  }
  return format
}
