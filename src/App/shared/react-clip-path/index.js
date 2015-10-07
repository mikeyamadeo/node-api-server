import React, { PropTypes } from 'react'
import Radium from 'radium'
import { pnt, makeClipPath, isArray } from './helpers'

const baseStyles = {
  width: '100%',
  height: '100%'
}

const Polygon = ({
  points,
  color,
  position,
  transition,
  animationDuration
}) => {

  let style

  if (isArray(points)) {
    style = makeClipPath({
      type: 'polygon',
      params: points.map(pnt).join(', ')
    })
  } else {
    let radiumKeyframes = {}
    const frames = Object.keys(points)

    frames.forEach((frame) => {
      radiumKeyframes[frame] = makeClipPath({
        type: 'polygon',
        params: points[frame].map(pnt).join(', ')
      })
    })

    const keyframes = Radium.keyframes(radiumKeyframes, 'name')
    style = { animation: `${keyframes} ${animationDuration}s linear infinite` }
  }

  return (
    <div style={Object.assign({}, {
      position,
      transition,
      backgroundColor: color
    }, baseStyles, style)} />
  )
}

Polygon.propTypes = {
  points: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ]),
  color: PropTypes.string,
  position: PropTypes.string,
  transition: PropTypes.string,
  animationDuration: PropTypes.number
}

Polygon.defaultProps = {
  color: 'black',
  position: 'absolute',
  transition: '.25s ease',
  animationDuration: 0.35
}

export default {
  Polygon
}
