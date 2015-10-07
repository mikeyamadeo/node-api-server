import React, { PropTypes } from 'react'
import { Polygon } from 'react-clip-path'
import * as renderData from './renderData'

const TRANSITION = '.25s ease-in'

const sizeMe = (num) => {
  const size = `${num}%`
  return {
    width: size,
    height: size
  }
}

const placeMeStyles = {
  center: {
    WebkitTransform: `translate(-50%, -50%)`,
    transform: `translate(-50%, -50%)`
  },
  'top-center': {
    WebkitTransform: `translate(-50%, 0)`,
    transform: `translate(-50%, 0)`
  }
}
const placeMe = ({ref, coords}) => {
  const [x, y] = coords
  const refs = ref.split('-')
  const vert = refs[0] !== 'center' ? refs[0] : 'top'
  const horz = refs[1] && refs[1] !== 'center' ? refs[1] : 'left'
  const centering = placeMeStyles[ref] || {}

  return Object.assign({}, centering, {
    position: 'absolute',
    [horz]: `${x}%`,
    [vert]: `${y}%`
  })
}

const part = (pieces) => {
  return ({
    size = 100,
    placement = {
      ref: 'center',
      coords: [50, 50]
    },
    data = {}
  }) => {
    const style = Object.assign({
      transition: TRANSITION,
      WebkitTransition: TRANSITION
    }, sizeMe(size), placeMe(placement))
    return (
      <div style={style}>
        {pieces.map((name, i) =>
          <Polygon key={i} points={data[name].points} color={data[name].color} transition={TRANSITION} { ...data[name] }/>
        )}
      </div>
    )
  }
}

const Head = part([
  'mouth',
  'tongue',
  'headLeft',
  'headRight',
  'eyeLeft',
  'eyeRight',
  'pupilLeft',
  'pupilRight',
  'nostrilLeft',
  'nostrilRight'
])

const Body = part([
  'bodyLeft',
  'bodyRight',
  'bodyTop',
  'bellyLeft',
  'bellyRight',
  'armLeft',
  'armRight'
])

const Legs = part([
  'legLeft',
  'footLeft',
  'legRight',
  'footRight',
  'footClawLeft',
  'footClawRight'
])

const Tail = part([
  'tailStem',
  'tailEnd',
  'flameYellow',
  'flameRed'
])

const WingLeft = part([
  'wingRimLeft',
  'wingLeft'
])

const WingRight = part([
  'wingRimRight',
  'wingRight'
])

const placementCoords = {
  stage0: {
    legs: [50, 60],
    tail: [60.8, 4],
    body: [50, 60],
    head: [50, 59],
    wingLeft: [50, 0],
    wingRight: [50, 0]
  },
  stage1: {
    legs: [50, 60],
    tail: [60.8, 4],
    body: [50, 56],
    head: [50, 53],
    wingLeft: [50, 40],
    wingRight: [50, 40]
  },
  stage2: {
    legs: [50, 55],
    tail: [0, 0],
    body: [50, 46],
    head: [47.4, 30],
    wingLeft: [50, 42],
    wingRight: [50, 42]
  }
}

const sizing = {
  stage0: {
    legs: 40,
    tail: 40,
    body: 40,
    head: 30,
    wingLeft: 0,
    wingRight: 0
  },
  stage1: {
    legs: 40,
    tail: 40,
    body: 40,
    head: 32,
    wingLeft: 30,
    wingRight: 30
  },
  stage2: {
    legs: 45,
    tail: 100,
    body: 50,
    head: 34,
    wingLeft: 50,
    wingRight: 50
  }
}

const Charmander = ({stage = 0, animated}) => {
  const animationKey = animated ? 'animated' : ''
  const data = renderData[`stage${stage}${animationKey}`]
  const coords = placementCoords[`stage${stage}`]
  const s = sizing[`stage${stage}`]
  return (
    <div style={{position: 'container', width: '100%', height: '100%'}}>
      <WingLeft size={s.wingLeft} placement={{ref: 'bottom-right', coords: coords.wingLeft}} data={data} />
      <WingRight size={s.wingRight} placement={{ref: 'bottom-left', coords: coords.wingRight}} data={data} />
      <Tail size={s.tail} placement={{ref: 'bottom-left', coords: coords.tail}} data={data} />
      <Legs size={s.legs} placement={{ref: 'top-center', coords: coords.legs}} data={data} />
      <Body size={s.body} placement={{ref: 'top-center', coords: coords.body}} data={data} />
      <Head size={s.head} placement={{ref: 'center', coords: coords.head}} data={data} />
    </div>
  )
}

Charmander.propTypes = {
  stage: PropTypes.number,
  animated: PropTypes.bool
}

Charmander.defaultProps = {
  stage: 0,
  animated: false
}

export default Charmander
