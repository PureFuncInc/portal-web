export function generateRandomColor(opacity = 1): string {
  const colors = Array(3)
    .fill(255)
    .map(v => Math.round(Math.random() * v)
      .toFixed(0))
    .join(', ')

  return `rgba(${colors}, ${opacity})`
}
