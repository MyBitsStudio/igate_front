interface WhiteSection {
  id: string
  title: string
  icon: string
  content: string[]
}

interface WhiteSectionCategory {
  id: string
  title: string
  icon: string
  sections: WhiteSection[]
}

interface WhiteSectionCategoryUpdated extends WhiteSectionCategory {
  author: string
  updated: string
}

export const whiteSections: WhiteSectionCategoryUpdated[] = [
  {
    id: "section1",
    title: "<g>Introduction</g>",
    icon: "<FiFileText />",
    sections: [
      {
        id: "section1-1",
        title: "Introduction",
        icon: "<FiFileText />",
        content: [
          "Welcome to the new age in crypto techo-philanthropy. iGate is a revolutionary initiative that aims to transform how we interact with crypto and blockchains.",
          "iGate is a beacon of hope in a world increasingly interconnected by digital currencies. It bridges the gap between financial innovation and humanitarian efforts. This unique cryptocurrency not only provides a secure and efficient means of transactions but also serves as a catalyst for positive change.",
          "By combining the power of blockchain technology with the principles of philanthropy, iGate is dedicated to making a positive impact on the world. Our mission is to create a platform that empowers individuals to make a difference in the lives of others, both locally and globally.",
          "We believe that everyone has the power to change the world, and iGate is here to help you do just that. Join us on this journey to create a better future for all.",
        ],
      },
    ],
    author: "Quantum (Founder)",
    updated: "2024-08-12",
  },
  {
    id: "section2",
    title: "<y>Network</y>",
    icon: "<FiFileText />",
    sections: [
      {
        id: "section2-1",
        title: "Introduction",
        icon: "<FiFileText />",
        content: [
          "The iGate network is a decentralized platform that enables users to send and receive digital assets securely and efficiently. Built on the Ethereum blockchain, iGate leverages the power of smart contracts to facilitate peer-to-peer transactions without the need for intermediaries.",
          "The iGate network is powered by the iGate token (IGT), which serves as the primary medium of exchange on the platform. Users can use IGT to pay for goods and services, transfer funds to other users, and participate in the iGate ecosystem.",
          "The iGate network is designed to be fast, secure, and scalable, with low transaction fees and high throughput. By leveraging the latest blockchain technology, iGate aims to provide a seamless and user-friendly experience for all users.",
        ],
      },
      {
        id: "section2-2",
        title: "Network",
        icon: "<FiFileText />",
        content: [
          "The iGate network will be built as a Layer 1 + Layer 2 EVM solution, with the main chain acting as the settlement layer and the side chains providing additional scalability and functionality. The iGate network will support a wide range of use cases, including decentralized finance (DeFi), non-fungible tokens (NFTs), and decentralized applications (dApps).",
          "The iGate network will also feature a governance system that allows users to vote on proposals and changes to the network. This will ensure that the iGate network remains decentralized and community-driven, with decisions made by the users themselves.",
          "The iGate network will be powered by a global network of nodes that validate transactions and secure the network. By participating in the iGate network, users can earn rewards for staking their tokens and supporting the network.",
        ],
      },
      {
        id: "section2-3",
        title: "Development",
        icon: "<FiFileText />",
        content: [
          "The iGate team is committed to building a secure, scalable, and user-friendly network that meets the needs of the crypto community. This includes developing new features and functionality, improving the user experience, and enhancing the security and performance of the network.",
          "The iGate network will be developed using the latest blockchain technology, leverage best practices in software development, security, and testing to ensure that the network is robust and reliable.",
          "The iGate team will also work closely with the community to gather feedback, address concerns, and implement changes based on user input. This collaborative approach will help ensure that the iGate network meets the needs of its users and continues to evolve over time.",
        ],
      },
      {
        id: "section2-4",
        title: "Timeline",
        icon: "<FiFileText />",
        content: [
          "Building a chain on the scale, even as a layer 1/2 solution, is a massive undertaking. We are currently in the early stages of development, with the main focus on research, design, and planning.",
          "Our goal is to launch the iGate network in Q3 2025, with a testnet scheduled for Q1 2025. This timeline is subject to change based on the progress of development, community feedback, and other factors.",
          "A DevNet has been launched as of writing this article, and we are actively seeking feedback from the community to help shape the future of the iGate network. We invite you to join us on this journey and be a part of the iGate revolution.",
        ],
      },
    ],
    author: "Quantum (Founder)",
    updated: "2024-08-13",
  },
]
