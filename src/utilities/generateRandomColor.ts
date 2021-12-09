export function generateRandomColor(): string {
  const colors = Array(3)
    .fill(255)
    .map(v => Math.round(Math.random() * v)
      .toFixed(0))
    .join(', ')

  return `rgb(${colors})`
}
