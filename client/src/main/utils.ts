export const toFormattedDate = (toBeFormattedDate: String) => {
  const date = new Date(Number(toBeFormattedDate))
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
}
