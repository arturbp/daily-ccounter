export function renderTime(time: number) {
  return time < 10 ? `0${time}` : time;
}

export function renderFullTime(minutes: number, seconds: number) {
  return `${renderTime(minutes)}:${renderTime(seconds)}`
}