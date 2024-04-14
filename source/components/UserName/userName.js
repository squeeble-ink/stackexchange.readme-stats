export const userName = (displayName, nameSize = 25, nameX = null) => `
  <g
    data-test-id="profile-name"
    transform="translate(${nameX === null ? 105 : 0}, 65)"
  >
    <style>
      .profile-name {
        font: 600 ${nameSize}px 'Segoe UI', Ubuntu, Sans-Serif;
        fill: #f2f2f3;
        animation: fadeInAnimation 0.8s ease-in-out forwards;
      }
    </style>
    <text
      x="${nameX === null ? 0 : nameX}"
      y="0"
      ${nameX === null ? 'text-anchor="middle"' : ''}
      class="profile-name"
    >
      ${displayName}
    </text>
  </g>
`
