export const getBase64Image = (url) => {
  return fetch(url, {
    signal: AbortSignal.timeout(60 * 1000),
  })
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => Buffer.from(arrayBuffer))
    .then(
      (buffer) =>
        `data:image/png;base64,${buffer.toString('base64')}`,
    )
}
