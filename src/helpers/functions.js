export function makeStringFromArr(arr) {
  let st = ''

  for (let i = 0; i < arr.length; i++) {
    st += `${arr[i].name} (${arr[i].price}₽); `
  }
}