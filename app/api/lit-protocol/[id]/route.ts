export function generateStaticParams() {
    return [ { slug: ["/"] } ]
}

export { GET } from "@/integrations/lit-protocol/api/[id]"
