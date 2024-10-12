interface RandomNumberParams {
  max: number
  min?: number
}

export function getRandomNumber({ max, min = 0 }: RandomNumberParams) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function range(start: number, end: number) {
  const length = end - start + 1
  return Array.from({ length }, (_, index) => index + start)
}
