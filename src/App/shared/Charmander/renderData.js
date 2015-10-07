
const clr = {
  char: '#ffac3d',
  char2: '#f3973e',
  mouth: '#e18100',
  tongue: '#ff9287',
  eye: '#5f617a',
  pupil: 'white',
  belly: '#f7e3c9',
  flameRed: '#f21c1c',
  flameYellow: '#f2d11c'
}

const clr1 = {
  charm: '#E8180F',
  charm2: '#FF0449',
  mouth: '#C9041B',
  tongue: '#ff9287',
  eye: 'white',
  pupil: '#5f617a'
}

const clr2 = {
  wing: '#297283'
}

/**
 *
 *
 *
 *  STAGE 0
 *
 *
 */
export const stage0 = {
  headLeft: {
    points: [
      [0, 95],
      [-50, 40],
      [0, 10]
    ],
    color: clr.char
  },
  headRight: {
    points: [
      [0, 95],
      [50, 40],
      [0, 10]
    ],
    color: clr.char2
  },
  mouth: {
    points: [
      [50, 40],
      [-50, 40],
      [0, 0]
    ],
    color: clr.mouth
  },
  tongue: {
    points: [
      [40, 50],
      [-40, 50],
      [0, 10]
    ],
    color: clr.tongue
  },
  eyeLeft: {
    points: [
      [-5, 75],
      [-30, 45],
      [-5, 45]
    ],
    color: clr.eye
  },
  eyeRight: {
    points: [
      [5, 75],
      [30, 45],
      [5, 45]
    ],
    color: clr.eye
  },
  pupilLeft: {
    points: [
      [-8, 65],
      [-15, 58],
      [-8, 58]
    ],
    color: clr.pupil
  },
  pupilRight: {
    points: [
      [8, 65],
      [15, 58],
      [8, 58]
    ],
    color: clr.pupil
  },
  nostrilLeft: {
    points: [
      [-5, 25],
      [-13, 25],
      [-5, 18]
    ],
    color: clr.eye
  },
  nostrilRight: {
    points: [
      [5, 25],
      [13, 25],
      [5, 18]
    ],
    color: clr.eye
  },
  wingLeft: {
    points: [
      [0, 0],
      [48, 0],
      [0, 48]
    ],
    color: 'transparent'
  },
  wingRight: {
    points: [
      [-48, 0],
      [0, 0],
      [0, 48]
    ],
    color: 'transparent'
  },
  wingRimLeft: {
    points: [
      [-50, 0],
      [50, 0],
      [0, 50]
    ],
    color: 'transparent'
  },
  wingRimRight: {
    points: [
      [-50, 0],
      [50, 0],
      [0, 50]
    ],
    color: 'transparent'
  },
  bodyLeft: {
    points: [
      [0, 100],
      [0, 10],
      [-32, 35]
    ],
    color: clr.char
  },
  bodyRight: {
    points: [
      [0, 100],
      [0, 10],
      [32, 35]
    ],
    color: clr.char2
  },
  bodyTop: { // used for charizard
    points: [
      [15, 100],
      [0, 5],
      [-15, 100]
    ],
    color: 'transparent'
  },
  bellyLeft: {
    points: [
      [0, 80],
      [0, 10],
      [-25, 30]
    ],
    color: clr.belly
  },
  bellyRight: {
    points: [
      [0, 80],
      [0, 10],
      [25, 30]
    ],
    color: clr.belly
  },
  armLeft: {
    points: [
      [-12, 75],
      [-23, 55],
      [-5, 30]
    ],
    color: clr.char2
  },
  armRight: {
    points: [
      [12, 75],
      [23, 55],
      [5, 30]
    ],
    color: clr.char
  },
  legLeft: {
    points: [
      [-32, 35],
      [0, 10],
      [-25, 0]
    ],
    color: clr.char
  },
  legRight: {
    points: [
      [32, 35],
      [0, 10],
      [25, 0]
    ],
    color: clr.char2
  },
  footLeft: {
    points: [
      [-8, 0],
      [-32, 0],
      [-20, 12]
    ],
    color: clr.char2
  },
  footRight: {
    points: [
      [8, 0],
      [32, 0],
      [20, 12]
    ],
    color: clr.char
  },
  footClawLeft: {
    points: [
      [-12, 0],
      [-20, 0],
      [-28, 0]
    ],
    color: 'white'
  },
  footClawRight: {
    points: [
      [12, 0],
      [20, 0],
      [28, 0]
    ],
    color: 'white'
  },
  tailStem: {
    points: [
      [-49, 5],
      [-45, 25],
      [-15, 25]
    ],
    color: clr.char
  },
  tailEnd: {
    points: [
      [-35, 55],
      [-30, 25],
      [-15, 25]
    ],
    color: clr.char2
  },
  flameYellow: {
    points: {
      '0%': [
        [-32, 50],
        [-20, 70],
        [-32, 70]
      ],
      '100%': [
        [-32, 70],
        [-20, 50],
        [-32, 50]
      ]
    },
    animationDuration: 0.32,
    color: clr.flameYellow
  },
  flameRed: {
    points: {
      '0%': [
        [-40, 45],
        [-25, 50],
        [-40, 70]
      ],
      '100%': [
        [-40, 75],
        [-25, 55],
        [-40, 45]
      ]
    },
    animationDuration: 0.35,
    color: clr.flameRed
  }
}

/**
 *
 *
 *
 *  STAGE 0 ANIMATED
 *
 *
 */
export const stage0animated = Object.assign({}, stage0, {
  headLeft: {
    points: [
      [0, 95],
      [-50, 40],
      [0, 25]
    ],
    color: clr.char
  },
  headRight: {
    points: [
      [0, 95],
      [50, 40],
      [0, 25]
    ],
    color: clr.char2
  },
  eyeLeft: {
    points: [
      [-5, 60],
      [-30, 45],
      [-5, 45]
    ],
    color: clr.eye
  },
  eyeRight: {
    points: [
      [5, 60],
      [30, 45],
      [5, 45]
    ],
    color: clr.eye
  },
  pupilLeft: {
    points: [
      [-8, 50],
      [-15, 50],
      [-8, 50]
    ],
    color: clr.eye
  },
  pupilRight: {
    points: [
      [8, 50],
      [15, 50],
      [8, 50]
    ],
    color: clr.eye
  },
  nostrilLeft: {
    points: [
      [-5, 32],
      [-13, 32],
      [-5, 30]
    ],
    color: clr.eye
  },
  nostrilRight: {
    points: [
      [5, 32],
      [13, 32],
      [5, 30]
    ],
    color: clr.eye
  },
  armLeft: {
    points: [
      [-12, 75],
      [-21, 58],
      [-52, 85]
    ],
    color: clr.char2
  },
  armRight: {
    points: [
      [12, 75],
      [21, 58],
      [52, 85]
    ],
    color: clr.char
  }
})

/**
 *
 *
 *
 *  STAGE 1
 *
 *
 */
export const stage1 = {
  headLeft: {
    points: [
      [0, 100],
      [-45, 40],
      [0, 10]
    ],
    color: clr1.charm
  },
  headRight: {
    points: [
      [0, 100],
      [45, 40],
      [0, 10]
    ],
    color: clr1.charm2
  },
  mouth: {
    points: [
      [45, 40],
      [-45, 40],
      [0, 0]
    ],
    color: clr1.mouth
  },
  tongue: {
    points: [
      [40, 45],
      [-40, 45],
      [0, 8]
    ],
    color: clr1.tongue
  },
  eyeLeft: {
    points: [
      [-5, 62],
      [-30, 47],
      [-5, 45]
    ],
    color: clr1.eye
  },
  eyeRight: {
    points: [
      [5, 62],
      [30, 47],
      [5, 45]
    ],
    color: clr1.eye
  },
  pupilLeft: {
    points: [
      [-6, 58],
      [-22, 48],
      [-6, 46]
    ],
    color: clr1.pupil
  },
  pupilRight: {
    points: [
      [6, 58],
      [22, 48],
      [6, 46]
    ],
    color: clr1.pupil
  },
  nostrilLeft: {
    points: [
      [-5, 25],
      [-13, 25],
      [-5, 20]
    ],
    color: clr.eye
  },
  nostrilRight: {
    points: [
      [5, 25],
      [13, 25],
      [5, 20]
    ],
    color: clr.eye
  },
  wingLeft: {
    points: [
      [0, 0],
      [48, 0],
      [0, 48]
    ],
    color: 'transparent'
  },
  wingRight: {
    points: [
      [-48, 0],
      [0, 0],
      [0, 48]
    ],
    color: 'transparent'
  },
  wingRimLeft: {
    points: [
      [0, 0],
      [50, 0],
      [0, 50]
    ],
    color: 'transparent'
  },
  wingRimRight: {
    points: [
      [-50, 0],
      [0, 0],
      [0, 50]
    ],
    color: 'transparent'
  },
  bodyLeft: {
    points: [
      [0, 100],
      [0, 5],
      [-32, 30]
    ],
    color: clr1.charm
  },
  bodyRight: {
    points: [
      [0, 100],
      [0, 5],
      [32, 30]
    ],
    color: clr1.charm2
  },
  bodyTop: { // used for charizard
    points: [
      [15, 100],
      [0, 5],
      [-15, 100]
    ],
    color: 'transparent'
  },
  bellyLeft: {
    points: [
      [0, 80],
      [0, 5],
      [-25, 25]
    ],
    color: clr.belly
  },
  bellyRight: {
    points: [
      [0, 80],
      [0, 5],
      [25, 25]
    ],
    color: clr.belly
  },
  armLeft: {
    points: [
      [-12, 74],
      [-23, 50],
      [-5, 20]
    ],
    color: clr1.charm2
  },
  armRight: {
    points: [
      [12, 74],
      [23, 50],
      [5, 20]
    ],
    color: clr1.charm
  },
  legLeft: {
    points: [
      [-32, 40],
      [0, 15],
      [-25, 0]
    ],
    color: clr1.charm
  },
  legRight: {
    points: [
      [32, 40],
      [0, 15],
      [25, 0]
    ],
    color: clr1.charm2
  },
  footLeft: {
    points: [
      [-8, 0],
      [-32, 0],
      [-20, 12]
    ],
    color: clr1.charm2
  },
  footRight: {
    points: [
      [8, 0],
      [32, 0],
      [20, 12]
    ],
    color: clr1.charm
  },
  footClawLeft: {
    points: [
      [-16, 1],
      [-20, 4],
      [-24, 1]
    ],
    color: 'white'
  },
  footClawRight: {
    points: [
      [16, 1],
      [20, 4],
      [24, 1]
    ],
    color: 'white'
  },
  tailStem: {
    points: [
      [-49, 8],
      [-45, 30],
      [-5, 20]
    ],
    color: clr1.charm
  },
  tailEnd: {
    points: [
      [-40, 65],
      [-24, 24],
      [-5, 20]
    ],
    color: clr1.charm2
  },
  flameYellow: {
    points: {
      '0%': [
        [-37, 55],
        [-25, 80],
        [-37, 80]
      ],
      '100%': [
        [-37, 80],
        [-25, 55],
        [-37, 55]
      ]
    },
    animationDuration: 0.32,
    color: clr.flameYellow
  },
  flameRed: {
    points: {
      '0%': [
        [-45, 50],
        [-30, 55],
        [-45, 85]
      ],
      '100%': [
        [-45, 95],
        [-30, 60],
        [-45, 50]
      ]
    },
    color: clr.flameRed
  }
}

/**
 *
 *
 *
 *  STAGE 2
 *
 *
 */
export const stage2 = {
  headLeft: {
    points: [
      [-50, 100],
      [-15, 20],
      [30, 20]
    ],
    color: clr.char
  },
  headRight: {
    points: [
      [-50, 100],
      [30, 70],
      [30, 20]
    ],
    color: clr.char2
  },
  mouth: {
    points: [
      [30, 20],
      [-15, 20],
      [7.5, -20]
    ],
    color: clr.char
  },
  tongue: {
    points: [
      [40, 45],
      [-40, 45],
      [0, 8]
    ],
    color: 'transparent'
  },
  eyeLeft: { // being used as a horn
    points: [
      [50, 35],
      [30, 70],
      [29, 45]
    ],
    color: clr.char2
  },
  eyeRight: {
    points: [
      [22, 60],
      [22, 40],
      [-5, 70]
    ],
    color: clr1.eye
  },
  pupilLeft: { // being used as a tooth
    points: [
      [-35, 85],
      [-39, 79],
      [-32, 82]
    ],
    color: 'white'
  },
  pupilRight: {
    points: [
      [16, 61],
      [16, 48],
      [-4, 69.25]
    ],
    color: clr1.pupil
  },
  nostrilLeft: {
    points: [
      [-5, 25],
      [-13, 25],
      [-5, 20]
    ],
    color: 'transparent'
  },
  nostrilRight: {
    points: [
      [-43, 96],
      [-38, 94],
      [-38, 91]
    ],
    color: clr.eye
  },
  wingLeft: {
    points: [
      [-46, 0],
      [46, 0],
      [0, 46]
    ],
    color: clr2.wing
  },
  wingRight: {
    points: [
      [-46, 0],
      [46, 0],
      [0, 46]
    ],
    color: clr2.wing
  },
  wingRimLeft: {
    points: [
      [-50, 0],
      [50, 0],
      [0, 50]
    ],
    color: clr.char
  },
  wingRimRight: {
    points: [
      [-50, 0],
      [50, 0],
      [0, 50]
    ],
    color: clr.char2
  },
  bodyLeft: {
    points: [
      [-5, 90],
      [0, 10],
      [-32, 35]
    ],
    color: clr.char
  },
  bodyRight: {
    points: [
      [5, 90],
      [0, 10],
      [32, 35]
    ],
    color: clr.char2
  },
  bodyTop: {
    points: [
      [8, 100],
      [0, 10],
      [-8, 100]
    ],
    color: clr.char
  },
  bellyLeft: {
    points: [
      [0, 65],
      [0, 10],
      [-25, 30]
    ],
    color: clr.belly
  },
  bellyRight: {
    points: [
      [0, 65],
      [0, 10],
      [25, 30]
    ],
    color: clr.belly
  },
  armLeft: {
    points: [
      [-7, 85],
      [-17, 65],
      [-50, 60]
    ],
    color: clr.char
  },
  armRight: {
    points: [
      [7, 85],
      [17, 65],
      [50, 60]
    ],
    color: clr.char2
  },
  legLeft: {
    points: [
      [-35.6, 48],
      [0, 20],
      [-34, 0]
    ],
    color: clr.char
  },
  legRight: {
    points: [
      [35.6, 48],
      [0, 20],
      [34, 0]
    ],
    color: clr.char2
  },
  footLeft: {
    points: [
      [-5, 0],
      [-35, 0],
      [-20, 15]
    ],
    color: clr.char2
  },
  footRight: {
    points: [
      [5, 0],
      [35, 0],
      [20, 15]
    ],
    color: clr.char
  },
  footClawLeft: {
    points: [
      [-16, 1],
      [-20, 6],
      [-24, 1]
    ],
    color: 'white'
  },
  footClawRight: {
    points: [
      [16, 1],
      [20, 6],
      [24, 1]
    ],
    color: 'white'
  },
  tailStem: {
    points: [
      [16, 21.5],
      [15, 9.5],
      [40, 5]
    ],
    color: clr.char
  },
  tailEnd: {
    points: [
      [-35, 2],
      [25, 10],
      [40, 5]
    ],
    color: clr.char2
  },
  flameYellow: {
    points: {
      '0%': [
        [-37, 2],
        [-25, 30],
        [-37, 30]
      ],
      '100%': [
        [-37, 30],
        [-25, 2],
        [-37, 2]
      ]
    },
    animationDuration: 0.32,
    color: clr.flameYellow
  },
  flameRed: {
    points: {
      '0%': [
        [-40, 0.5],
        [-25, 2],
        [-40, 35]
      ],
      '100%': [
        [-40, 45],
        [-25, 13],
        [-40, 0.5]
      ]
    },
    color: clr.flameRed
  }
}

