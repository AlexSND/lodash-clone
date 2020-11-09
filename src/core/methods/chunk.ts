export function chunk(arr: any[], size: number = 1): any[] {
  const newArr = []
  if (size === 0) {
    return newArr
  }
  const chunkCount = arr.length % size === 0
    ? arr.length / size
    : Math.floor(arr.length / size) + 1
  for (let i = 0; i < chunkCount; i++) {
    const chunk = []
    arr.forEach((item, index) => {
      if (index >= i * size && index < (i * size) + size) {
        chunk.push(item)
      }
    })
    newArr.push(chunk)
  }
  return newArr
}
