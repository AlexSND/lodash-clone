export function concat(arr: any[]): any[] {
  const newArr = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(el => newArr.push(el))
    } else {
      newArr.push(item)
    }
  })
  return newArr
}