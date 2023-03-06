import { ReactNode } from "react"

export type Props = {
    locationId: number
    name?: string
    types?: string
    dimension?: string
    type?: 'list' | 'details'
    onClick?: (id: string) => void
    id?: string
}