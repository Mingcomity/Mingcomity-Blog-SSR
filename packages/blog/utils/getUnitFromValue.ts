export default function (val: string) {
  const num = getNumFromValue(val).toString()
  return val.replace(num, '').replace(/\./, '')
}
