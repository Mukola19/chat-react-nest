export default (number: number): string => {
  const mins = Math.floor(number / 60)
  const secs = (number % 60).toFixed()
  const secsNum = Number(secs)
  return `${mins < 10 ? '0' : ''}${mins}:${secsNum < 10 ? '0' : ''}${secs}`
}
