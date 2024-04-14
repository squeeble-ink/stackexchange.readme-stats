# SE Readme Changelog

## [v2.2.0 - 2024-04-14](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v2.2.0)

### Added

- Created `source` folder
- New svg components for error handling [#3](https://github.com/squeeble-ink/stackexchange.readme-stats/issues/3)
  - ErrorText
  - Header (new error handling)
  - Icons
- Queries on README

### Changed

- Moved svg generation to components
  - Badge
  - BadgeContainer
  - Header
  - ReputationContainer
  - SVG (full generation)
  - UserImage
  - UserName
- Moved from npm to yarn v4.1.1
- Docker base images

## [v2.1.4 - 2024-02-19](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v2.1.4)

### Fixed

- moved location conf to location folder
- nginx location conf now imported by backend repo

## [v2.1.3 - 2024-02-19](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v2.1.3)

### Fixed

- nginx proxy_pass

## [v2.1.2 - 2024-02-19](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v2.1.2)

### Fixed

- nginx ports

## [v2.1.1 - 2024-02-19](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v2.1.1)

### Fixed

- nginx dev configuration

## [v2.1.0 - 2024-02-19](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v2.1.0)

### Added

- Explanation how to use
- GitHub workflows for deployment
- nginx configuration for deployment

### Fixed

- Site name centering
- User name centering
  - nameX parameter still works as expected

### Changed

- Docker service names to include project name

## [v2.0.0 - 2023-04-24](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v2.0.0)

### Added

- Running project stand-alone via Docker
- Created a dev env to run project in development mode

### Fixed

- Issue when Stack Exchange API is down OR hitting rate limit
- Issue when User was not found on Stack Exchange site

## [v1.1.1 - 2022-07-10](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v1.1.1)

### Fixed

- Documentation on how to use the API

## [v1.1.0 - 2021-01-06](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v1.1.0)

### Added

- Ask Ubuntu website
- Extended SVG with optional
  - User name instead of image
  - User name outline from left

## [v1.0.0 - 2020-09-28](https://github.com/squeeble-ink/stackexchange.readme-stats/releases/tag/v1.0.0)

### Added

- Meta Exchange website
- Stack Overflow website
- Shows a SVG with
  - Stack Exchange site name
  - User profile image
  - User score on said Stack Exchange site
  - Users badges with dynamic scaling
    - Gold
    - Silver
    - Bronze
