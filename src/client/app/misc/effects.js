export const distortionObj = {
                  name: "Distortion",
                  args: [{normalRange: 0.8}],
                  enabled:true
                }

export const Effects = {
  Distortion: {
    name: "Distortion",
    args: [{normalRange: 0.8}],
    enabled: true
  },
  Freeverb: {
    name: "Freeverb",
    args: [
      {roomSize: 0.7},
      {dampening: 3000}
    ],
    enabled: true
  },
  AutoFilter: {
    name: "AutoFilter",
    args: [
      {frequency: 1},
      {baseFrequency: 200},
      {octaves: 2.6}
    ],
    enabled: true
  },
  AutoWah: {
    name: "AutoWah",
    args: [
      {baseFrequency: 100},
      {octaves: 6},
      {sensitivity: 0}
    ],
    enabled: true
  },
  BitCrusher: {
    name: "BitCrusher",
    args: [
      {bits: 4}
    ],
    enabled: true
  },
  Chebyshev: {
    name: "Chebyshev",
    args: [
      {order: 1}
    ],
    enabled: true
  },
  Chorus: {
    name: "Chorus",
    args: [
      {frequency: 1.5},
      {delayTime: 3.5},
      {depth: 0.7}
    ],
    enabled: true
  },
  FeedbackDelay: {
    name: "FeedbackDelay",
    args: [
      {delayTime: .5},
      {feedback: .5}
    ],
    enabled: true
  },
  JCReverb: {
    name: "JCReverb",
    args: [
      {rooomSize: 0.5}
    ],
    enabled: true
  },
  Phaser: {
    name: "Phaser",
    args: [
      {frequency: 0.5},
      {octaves: 3},
      {baseFrequency: 350}
    ],
    enabled: true
  },
  PitchShift: {
    name: "PitchShift",
    args: [
      {pitch: 0},
    ],
    enabled: true
  },
  StereoWidener: {
    name: "StereoWidener",
    args: [
      {width: 0.5},
    ],
    enabled: true
  },
  Tremolo: {
    name: "Tremolo",
    args: [
      {frequency: 10},
      {depth: 0.5}
    ],
    enabled: true
  },
  Vibrato: {
    name: "Vibrato",
    args: [
      {frequency: 5},
      {depth: 0.1}
    ],
    enabled: true
  },
}