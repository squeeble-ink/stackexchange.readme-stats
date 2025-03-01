export const processObjectOfPromises = async (object) => {
  const keys = Object.keys(object)
  const promises = Object.values(object)

  const results = await Promise.allSettled(promises)

  // Reconstruct the object with the resolved values
  const resultObject = {}
  keys.forEach((key, index) => {
    resultObject[key] = results[index]
  })

  return resultObject
}
