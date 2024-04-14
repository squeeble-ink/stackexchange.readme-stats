export const header = (siteName, error = false) => {
  const color = error ? '#ff0000' : '#f2f2f3'
  const title = error ? 'Error!' : siteName

  return `
    <style>
      .header {
        font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
        fill: ${color};
        animation: fadeInAnimation 0.8s ease-in-out forwards;
      }
    </style>
    <g data-test-id="header-group" transform="translate(105, 25)">
      <text x="0" y="0" class="header " text-anchor="middle" data-test-id="header">${title}</text>
    </g>
  `
}
