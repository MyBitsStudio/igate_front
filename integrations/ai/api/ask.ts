import {ToolStream} from "@/actions/ai/tool/tool-stream";
import {AgentStream, pollConversation} from "@/actions/ai/agent/agent-stream";

export async function OpenToolStream(message: {}) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await ToolStream({
        params: message,
    }).then((data) => {
        // enter you logic when the fetch is successful
        console.log(data.output?.answer)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return data.output?.answer
    })
}

export async function OpenAgentStream(
    message: string,
    agent_id: string,
    conversation_id?: string
) {
    if (conversation_id) {
        return pollConversation({
            message: message,
            agent_id: agent_id,
            conversation_id: conversation_id,
        })
    } else {
        return AgentStream({
            message: message,
            agent_id: agent_id,
        })
    }
}