export function getDateFromDateString(str: string) {
  const [year, month, day] = str.split('-').map(Number)
  const result = new Date()
  result.setDate(1)
  result.setFullYear(year)
  result.setMonth(month - 1)
  result.setDate(day)
  result.setHours(0)
  result.setMinutes(0)
  result.setSeconds(0)
  result.setMilliseconds(0)
  return result
}

export function getDateStringFromDate(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-\
${date.getDate().toString().padStart(2, '0')}`
}
