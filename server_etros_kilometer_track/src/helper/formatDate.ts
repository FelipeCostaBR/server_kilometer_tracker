export function formatDate(inputDate) {
  const date_formatted = inputDate.split('-').reverse()
  const date = date_formatted.join("-")
  return date;
}
