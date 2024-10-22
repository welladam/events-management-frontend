import { parse, parseISO, formatISO, format } from 'date-fns'

export const convertToISO = (dateString: string): string => {
  const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date())
  return formatISO(parsedDate)
}

export const convertToDateString = (dateISO?: string): string => {
  if (dateISO) {
    const parsedDate = parseISO(dateISO)
    return format(parsedDate, 'dd/MM/yyyy')
  }

  return ''
}
