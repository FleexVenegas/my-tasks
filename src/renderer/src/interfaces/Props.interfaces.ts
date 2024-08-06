import { ReactNode } from 'react'

export interface LayoutProps {
    children: ReactNode
    className?: string
}

export interface ClassProps {
    className?: string
}

export interface CreateTask {
    title: string
    description: string
}
