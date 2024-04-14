import { getBadges, badgeClass } from '../Badge/index.js'

export const badgeContainer = (useImage, badgeCounts) => {
  const { bronzeCard, silverCard, goldCard } = getBadges(badgeCounts)

  return `
    <g data-test-id="badges-card" transform="translate(25, ${
      useImage ? 240 : 130
    })">
      ${badgeClass()}
      ${goldCard}
      ${silverCard}
      ${bronzeCard}
    </g>
  `
}
