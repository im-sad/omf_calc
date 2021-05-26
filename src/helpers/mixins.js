export const lineHeight = (fontSize = 14, lineHeight = 20) => {
  typeof fontSize === 'string' && (fontSize = parseInt(fontSize, 10))
  typeof lineHeight === 'string' && (lineHeight = parseInt(lineHeight, 10))

  return lineHeight / fontSize
}

export const textOverflow = () => {
  return {
    'overflow': 'hidden',
    'max-width': '100%',
    'white-space': 'nowrap',
    'text-overflow': 'ellipsis'
  }
}

export const lineClamp = (num) => {
  return {
    'overflow': 'hidden',
    'display': '-webkit-box',
    '-webkit-line-clamp': `${num}`,
    '-webkit-box-orient': 'vertical'
  }
}
