import { ReactNode } from "react"
import { Node } from "typescript"

export type Props = {
    characterId: string
    name?: string
    status?: string
    species?: string
    image?: string
    Options?: (id: string) => void
    type?: 'list' | 'details'
    onClick?: (id: string) => void
    id?: string,
    children?: JSX.Element
}