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
  }
}