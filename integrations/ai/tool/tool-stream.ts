import { requestAPI } from "@/lib/api"

export interface AgentPayload {
  params: {}
}

export async function ToolStream(payload: AgentPayload) {
  // @ts-ignore
  const key: string =
    process.env.AGENT_API_KEY ||
    "995a2927d27d-48d4-8e6c-068dff49b033:sk-MTAyYWFjZjctMGQ2Ni00M2M3LTkzMGUtN2JjMzQ1ZmEwY2Y5"

  if (!key) {
    throw new Error("No agent API key provided " + key)
  }

  const url = `https://api-bcbe5a.stack.tryrelevance.com/latest/studios/bf66a332-415b-46bd-95c2-3c65ff477073/trigger_limited`

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await requestAPI(
    {
      "Content-Type": "application/json",
      Authorization: `${key}`,
    },
    "POST",
    JSON.stringify(payload.params),
    url
  )
}
