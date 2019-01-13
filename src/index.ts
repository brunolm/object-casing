export const caseKeys = (obj: {}, casingCallback: (value: string) => string) => {
  if (!obj || typeof obj !== 'object' || obj instanceof RegExp || obj instanceof Date) {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => caseKeys(item, casingCallback))
  }

  const keys = Object.keys(obj)

  const newObject = {}
  for (const key of keys) {
    const newKey = casingCallback(key)
    newObject[newKey] = caseKeys(obj[key], casingCallback)
  }

  return newObject
}
