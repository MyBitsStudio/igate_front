interface Category {
  name: string
  href: string
  description: string
  img: string
}

export const Categories: Category[] = [
  {
    name: "Apps",
    href: "/app",
    description: "Applications",
    img: "/integrations/siwe.svg",
  },
  {
    name: "Services",
    href: "/services",
    description: "Services",
    img: "/integrations/siwe.svg",
  },
  {
    name: "Info",
    href: "/info",
    description: "Information",
    img: "/integrations/siwe.svg",
  },
]

interface InterCategory {
  name: string
  description: string
  category: Category
}

export const AppCategories: InterCategory[] = [
  {
    name: "General",
    description: "General Applications",
    category: Categories[0],
  },
  {
    name: "Protocols",
    description: "Protocols",
    category: Categories[0],
  },
  {
    name: "AI",
    description: "AI",
    category: Categories[0],
  },
]

export const ServiceCategories: InterCategory[] = [
  {
    name: "Business",
    description: "Business Services",
    category: Categories[1],
  },
  {
    name: "Gaming",
    description: "Gaming",
    category: Categories[1],
  },
  {
    name: "Documents",
    description: "Document",
    category: Categories[1],
  },
]

export const InfoCategories: InterCategory[] = [
  {
    name: "About",
    description: "About",
    category: Categories[2],
  },
  {
    name: "Crypto",
    description: "Crypto",
    category: Categories[2],
  },
  {
    name: "Services",
    description: "Services",
    category: Categories[2],
  },
]

interface CategoryItem {
  name: string
  href: string
  description: string
  img: string
  category: InterCategory
}

export const AppItems: CategoryItem[] = [
  {
    name: "Swaps",
    href: "/apps/protocol/swaps",
    description: "Use our Swaps tools",
    img: "/integrations/siwe.svg",
    category: AppCategories[1],
  },
  {
    name: "AI Agents",
    href: "/apps/ai/agent",
    description: "Use our AI Agents",
    img: "/integrations/siwe.svg",
    category: AppCategories[2],
  },
]

export const ServiceItems: CategoryItem[] = [
  {
    name: "Business Services",
    href: "/services/business",
    description: "Business Services",
    img: "/integrations/siwe.svg",
    category: ServiceCategories[0],
  },
  {
    name: "Hosting Services",
    href: "/services/hosting",
    description: "Hosting Services",
    img: "/integrations/siwe.svg",
    category: ServiceCategories[0],
  },
  {
    name: "Bots",
    href: "/services/bots",
    description: "Customer Service Bots",
    img: "/integrations/siwe.svg",
    category: ServiceCategories[0],
  },
  {
    name: "Gaming",
    href: "/services/gaming",
    description: "Gaming Services",
    img: "/integrations/siwe.svg",
    category: ServiceCategories[1],
  },
]

export const InfoItems: CategoryItem[] = [
  {
    name: "Whitepaper",
    href: "/info/whitepaper",
    description: "Learn about iGate with our Whitepaper",
    img: "/integrations/siwe.svg",
    category: InfoCategories[0],
  },
  {
    name: "RoadMap",
    href: "/info/roadmap",
    description: "Our roadmap for the future",
    img: "/integrations/siwe.svg",
    category: InfoCategories[0],
  },
  {
    name: "Contracts",
    href: "/info/contracts",
    description: "Our contracts launched",
    img: "/integrations/siwe.svg",
    category: InfoCategories[1],
  },
  {
    name: "Ledger",
    href: "/info/ledger",
    description: "Our open ledger, viewable by all",
    img: "/integrations/siwe.svg",
    category: InfoCategories[1],
  },
  {
    name: "Privacy Policy",
    href: "/info/privacy",
    description: "Privacy Policy",
    img: "/integrations/siwe.svg",
    category: InfoCategories[2],
  },
  {
    name: "Integrations",
    href: "/info/integrations",
    description: "Our 3rd party services used",
    img: "/integrations/siwe.svg",
    category: InfoCategories[2],
  },
]

export function byCategory(category: Category) {
  switch (category) {
    case Categories[1]:
      return ServiceCategories
    case Categories[2]:
      return InfoCategories
    default:
      return AppCategories
  }
}

export function byItem(item: InterCategory) {
  switch (item.category) {
    case Categories[1]:
      return ServiceItems
    case Categories[2]:
      return InfoItems
    default:
      return AppItems
  }
}
