import { Chain, defineChain } from "@relevanceai/chain"

const chain = defineChain({
  title: "IP Agent",
  description: "An AI agent that can help you with IP related queries",
  setup: ({ params, step, code }) => {
    step("IP Search (Minimum)", {
      title: "IP Search (Minimum)",
      image: "/integrations/siwe.svg",
    })
    step("IP Search (Full)", {
      title: "IP Search (Full)",
      image: "/integrations/siwe.svg",
    })
  },
})

export default chain
