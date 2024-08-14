// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    telegram: string
    discord: string
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "iGate",
  title: "iGate - International Gateway to Crypto Solutions",
  emoji: "⚡",
  description: "Official application of iGate",
  localeDefault: "en",
  links: {
    telegram: "https://docs.turboeth.xyz/overview",
    discord: "https://discord.gg/U4jy7Xfh76",
    twitter: "https://twitter.com/district_labs",
    github: "https://github.com/turbo-eth/template-web3-app",
  },
}
