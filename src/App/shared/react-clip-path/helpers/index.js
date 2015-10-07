export const pnt = coords => {
  const [x, y] = coords
  const scale = 1
  const xMedian = 50
  const yMedian = 100

  const xCoord = (x * scale) + xMedian
  const yCoord = ((y * -1) * scale) + yMedian

  return xCoord + '% ' + yCoord + '%'
}

export const makeClipPath = ({type, params}) => {
  const value = `${type}(${params})`
  return {
    clipPath: value,
    WebkitClipPath: value
  }
}

export const isArray = (variable) => {
  return variable.constructor === Array
}
