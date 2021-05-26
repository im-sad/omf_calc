export function makeStringFromArr(arr) {
  let value = ''

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].active) {
      continue
    }

    value += `${arr[i].name} (${arr[i].price}₽)`

    value += ', '
  }

  return value.slice(0, -2)
}