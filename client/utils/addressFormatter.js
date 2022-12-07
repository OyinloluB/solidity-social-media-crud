export const formatAddress = (address) => {
  if (!address) {
    return ''
  }

  const separator = '...'
  const charsToShow = 12
  const frontChars = Math.ceil(charsToShow / 2)
  const backChars = Math.floor(charsToShow / 2)

  return (
    address.substr(0, frontChars) +
    separator +
    address.substr(address.length - backChars)
  )
}
