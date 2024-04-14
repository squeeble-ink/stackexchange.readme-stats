export const errorText = (errorMessages, fontSize = 18) => `
  <g
    data-test-id="error-message"
    transform="translate(105, 247)"
  >
    <style>
      .error-message {
        font: 600 ${fontSize}px 'Segoe UI', Ubuntu, Sans-Serif;
        fill: #ff0000;
        animation: fadeInAnimation 0.8s ease-in-out forwards;
      }
    </style>
    ${errorMessages.map(
      (errorMessage, index) => `
      <text
        x="0"
        y="${
          -errorMessages.length * (fontSize + 3) * 0.5 +
          (fontSize + 3) * 0.5 +
          index * (fontSize + 3)
        }"
        text-anchor="middle"
        class="error-message"
      >
        ${errorMessage}
      </text>
    `,
    )}
  </g>
`
