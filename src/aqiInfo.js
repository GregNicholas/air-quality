export const aqiInfo = {
  good: {
    color: "#A6CE39",
    warning: "Good",
    message: "It’s a great day to be active outside.",
    face: ":D"
  },
  moderate: {
    color: "#FFF000",
    warning: "Moderate",
    message: `Unusually sensitive people: Consider reducing
  prolonged or heavy exertion. Watch for symptoms
  such as coughing or shortness of breath. These are
  signs to take it easier.`,
    face: ":)"
  },
  unhealthysensitive: {
    color: "#F68F1F",
    warning: "Unhealthy for Sensitive Groups",
    message: `Sensitive groups: Reduce prolonged or heavy
  exertion. It’s OK to be active outside, but take more
  breaks and do less intense activities. Watch for
  symptoms such as coughing or shortness of breath.
  People with asthma should follow their asthma
  action plans and keep quick relief medicine handy.
  If you have heart disease: Symptoms such as
  palpitations, shortness of breath, or unusual fatigue
  may indicate a serious problem. If you have any of
  these, contact your heath care provider.`
  },
  unhealthy: {
    color: "#EE2324",
    warning: "Unhealthy",
    message: `Sensitive groups: Avoid prolonged or heavy exertion.
    Consider moving activities indoors or rescheduling.
    Everyone else: Reduce prolonged or heavy exertion.
    Take more breaks during outdoor activities. `,
    face: ":|"
  },
  veryunhealthy: {
    color: "#8D4098",
    warning: "Very Unhealthy",
    message: `Sensitive groups: Avoid all physical activity outdoors.
    Move activities indoors or reschedule to a time when
    air quality is better.
    Everyone else: Avoid prolonged or heavy exertion.
    Consider moving activities indoors or rescheduling to
    a time when air quality is better.`,
    face: ":("
  },
  hazardous: {
    color: "#88181C",
    warning: "Hazardous",
    message: `Everyone: Avoid all physical activity outdoors.
    Sensitive groups: Remain indoors and keep activity
    levels low. Follow tips for keeping particle levels low
    indoors. `,
    face: ":'O"
  }
};
