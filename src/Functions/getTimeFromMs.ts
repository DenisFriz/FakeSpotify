export function getTimeFromMs(time: number): string {
  const date = new Date(time);
  const seconds = date.getSeconds();
  if (seconds < 10) {
    return `${date.getMinutes()}:0${seconds}`;
  }
  return `${date.getMinutes()}:${date.getSeconds()}`;
}
