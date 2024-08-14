import { env } from "@/env.mjs"

export interface AgentPayload {
  message: string
  agent_id: string
  customKey?: string
  conversation_id?: string
}

export async function AgentStream(payload: AgentPayload) {
  // @ts-ignore
  const key: string = payload.customKey || env.AGENT_API_KEY

  if (!key) {
    throw new Error("No agent API key provided")
  }

  await fetch(
    "https://api-bcbe5a.stack.tryrelevance.com/latest/agents/trigger",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${key}`,
      },
      method: "POST",
      body: JSON.stringify({
        message: { role: "user", content: payload.message },
        agent_id: payload.agent_id,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      // enter you logic when the fetch is successful
      console.log(data)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return data
    })
    .catch((error) => {
      // enter your logic for when there is an error (ex. error toast)
      console.log(error)
    })
}

export async function pollConversation(payload: AgentPayload) {
  const key = payload.customKey || env.AGENT_API_KEY

  if (!key) {
    throw new Error("No agent API key provided")
  }

  await fetch(
    "https://api-bcbe5a.stack.tryrelevance.com/latest/agents/trigger",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${key}`,
      },
      method: "POST",
      body: JSON.stringify({
        message: { role: "user", content: payload.message },
        agent_id: payload.agent_id,
        conversation_id: payload.conversation_id,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      // enter you logic when the fetch is successful
      console.log(data)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return data
    })
    .catch((error) => {
      // enter your logic for when there is an error (ex. error toast)
      console.log(error)
    })
}
