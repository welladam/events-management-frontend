import { parse, formatISO } from 'date-fns'

export const convertToISO = (dateString: string): string => {
  const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date())
  return formatISO(parsedDate)
}
