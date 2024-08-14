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
  {
    id: "section3",
    title: "<g>Business Services</g>",
    icon: "<FiFileText />",
    sections: [
      {
        id: "section3-1",
        title: "Introduction",
        icon: "<FiFileText />",
        content: [
          "iGate offers a wide range of business services to help companies leverage the power of blockchain technology. From payment processing to supply chain management, iGate provides a suite of tools and solutions to streamline operations, reduce costs, and drive growth.",
          "Our team of experts has years of experience in blockchain development, finance, and business operations. We work closely with our clients to understand their needs, develop customized solutions, and provide ongoing support to ensure their success.",
          "Whether you are a small startup or a large enterprise, iGate has the tools and expertise to help you succeed in the digital economy. The services we offer include payment processing, tokenization, smart contracts, and more.",
        ],
      },
    ],
    author: "Quantum (Founder)",
    updated: "2024-08-12",
  },
  {
    id: "section4",
    title: "<g>Gaming Services</g>",
    icon: "<FiFileText />",
    sections: [
      {
        id: "section4-1",
        title: "Introduction",
        icon: "<FiFileText />",
        content: [
            "iGate is revolutionizing the gaming industry with its innovative blockchain-based gaming services. By leveraging the power of blockchain technology, iGate is creating a new paradigm for gaming that is secure, transparent, and decentralized.",
            "Our gaming services are designed to provide players with a seamless and immersive gaming experience, while also giving them the opportunity to earn rewards and participate in the iGate ecosystem. Whether you are a casual gamer or a hardcore enthusiast, iGate has something for everyone.",
            "Our team of experts is constantly working to develop new games, features, and functionality to enhance the gaming experience for our users. We are committed to creating a platform that is fun, engaging, and rewarding for all players.",
        ],
      },
    ],
    author: "Quantum (Founder)",
    updated: "2024-08-12",
  },
  {
    id: "section5",
    title: "<g>Structure</g>",
    icon: "<FiFileText />",
    sections: [
      {
        id: "section5-1",
        title: "Introduction",
        icon: "<FiFileText />",
        content: [
            "iGate is composed of multiple layers, each serving a specific purpose in the ecosystem. These layers work together to create a seamless and efficient platform that empowers users to transact, interact, and engage with the iGate network.",
            "The core layer of iGate is the blockchain itself, which serves as the foundation for the entire ecosystem. The blockchain is responsible for processing transactions, securing the network, and maintaining the integrity of the ledger.",
            "On top of the blockchain is the application layer, which includes the user interface, smart contracts, and other features that enable users to interact with the network. This layer is designed to be user-friendly, intuitive, and accessible to users of all skill levels.",
            "The governance layer is responsible for managing the network, making decisions, and enforcing rules and policies. This layer is designed to be decentralized, transparent, and community-driven, with decisions made by the users themselves.",
            "The final layer of iGate is the services layer, which includes a wide range of tools and solutions to help users transact, interact, and engage with the network. This layer is designed to be flexible, scalable, and customizable, with services tailored to the needs of individual users.",
        ],
      },
    ],
    author: "Quantum (Founder)",
    updated: "2024-08-12",
  },
  {
    id: "section6",
    title: "<g>Charity</g>",
    icon: "<FiFileText />",
    sections: [
      {
        id: "section6-1",
        title: "Introduction",
        icon: "<FiFileText />",
        content: [
            "iGate is committed to making a positive impact on the world through its charitable initiatives. We believe that everyone has the power to change the world, and iGate is here to help you do just that.",
            "Our charity program is designed to empower individuals to make a difference in the lives of others, both locally and globally. By donating to our charity fund, you can help support a wide range of causes, including education, healthcare, and more.",
            "We believe that by working together, we can create a better future for all. Join us on this journey to make the world a better place, one donation at a time.",
        ],
      },
      {
        id: "section6-2",
        title: "iGate Charity Programs",
        icon: "<FiFileText />",
        content: [
            "iGate is committed to increasing its impact on the world through its charity program. We are constantly seeking new ways to support causes that are important to our community and make a positive difference in the world.",

        ],
      },
      {
        id: "section6-3",
        title: "iGate Charity",
        icon: "<FiFileText />",
        content: [
          "Along with multiple programs to enhance the lives of people, iGate will structure it's own non-profit charity, focused on helping the less fortunate and those in need. The charity will be funded by a percentage of the utility fees on the iGate network, as well as donations from the community.",
          "Although the charity is aimed to help multiple causes, the main focus will be on helping children in need, providing them with education, healthcare, and other essential services. Our goal is to build a better future, and give those without a future a better chance at life.",
        ],
      },
    ],
    author: "Quantum (Founder)",
    updated: "2024-08-12",
  },
  {
    id: "section7",
    title: "<g>Finance</g>",
    icon: "<FiFileText />",
    sections: [
      {
        id: "section7-1",
        title: "Introduction",
        icon: "<FiFileText />",
        content: [
            "iGate is commited to transparency and financial responsibility. We believe that everyone has the right to know how their funds are being used, and we are dedicated to providing detailed reports on our financial activities.",
            "Our financial reports are designed to be clear, concise, and easy to understand. We provide information on our income, expenses, assets, and liabilities, as well as details on how funds are allocated and spent.",
            "We are committed to maintaining the highest standards of financial integrity and accountability. Our financial reports are audited by independent third parties to ensure accuracy and compliance with industry standards.",
            "All information related to our financial activities is available to the public, so you can see for yourself how your funds are being used to make a positive impact on the world."
        ],
      },
    ],
    author: "Quantum (Founder)",
    updated: "2024-08-12",
  },
]
