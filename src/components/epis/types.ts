import { ReactNode } from "react"

export type Props = {
    episodeId: number
    name?: string
    air_date?: string
    episode?: string
    type?: 'list' | 'details'
    onClick?: (id: string) => void
    id?: string
}