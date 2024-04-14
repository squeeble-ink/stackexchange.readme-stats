const getBadge = (type, amount, badges = '', neighbor = '') => {
  const maxW = 168

  let width = maxW / amount - 1 * amount

  let left = 0
  let colors = {}
  switch (type) {
    case 'bronze':
      colors.stroke = '#d1a684'
      colors.fill = '#4d433b'
      if (amount === 2) {
        left = maxW / amount + 1 * amount
      }

      if (amount === 3) {
        left = (maxW / amount) * 2 + 1 * amount
      }
      break
    case 'silver':
      colors.stroke = '#b4b8bc'
      colors.fill = '#424242'
      if (amount === 2 && neighbor === 'G') {
        left = maxW / amount + 1 * amount
      }

      if (amount === 3) {
        left = maxW / amount + 1
        width += 1
      }
      break
    case 'gold':
      colors.stroke = '#ffcc01'
      colors.fill = '#5e553c'
      break
  }

  if (badges === '' || badges === '0') {
    return null
  }

  return `
    <g data-testid="${type}-card">
      <rect data-testid="${type}-bg"
        x="${-5.5 + left}"
        y="12.5"
        rx="4.5"
        ry="4.5"
        width="${width}"
        height="25"
        stroke="${colors.stroke}"
        fill="${colors.fill}"
        stroke-opacity="1"
      />
      <rect data-testid="${type}-dot"
        x="${5 + left}"
        y="23"
        rx="4"
        ry="4"
        width="4"
        height="4"
        stroke="${colors.stroke}"
        fill="${colors.stroke}"
        stroke-opacity="1"
      />
      <text x="${
        left + (width / 2 - 3 * badges.length)
      }" y="30" class="badge" data-testid="header">${badges}</text>
    </g>
  `
}

export const getBadges = ({ bronze, silver, gold }) => {
  bronze = `${bronze}`
  silver = `${silver}`
  gold = `${gold}`

  let badges = 3
  let neighbor = ''
  if (bronze === '' || bronze === '0') {
    badges -= 1
    neighbor = 'G'
  }

  if (silver === '' || silver === '0') {
    badges -= 1
  }

  if (gold === '' || gold === '0') {
    badges -= 1
  }

  const bronzeCard = getBadge('bronze', badges, bronze)
  const silverCard = getBadge('silver', badges, silver, neighbor)
  const goldCard = getBadge('gold', badges, gold)

  return {
    bronzeCard,
    silverCard,
    goldCard,
  }
}
