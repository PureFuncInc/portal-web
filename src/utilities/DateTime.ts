import { format, getTime, parse } from 'date-fns'

export function formatDateTime(dateTime: number, form = 'yyyy-MM-dd HH:mm:ss'): string {
  return format(
    dateTime,
    form,
  )
}

export function parseDateTime(dateString: string, form = 'yyyy-MM-dd HH:mm:ss'): number {
  return getTime(parse(
    dateString,
    form,
    new Date(),
  ))
}
