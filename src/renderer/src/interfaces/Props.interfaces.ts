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

export interface responseTask {
    id: string
    title: string
    description: string
    status: string
    completed_at: string
    created_at: string
    updated_at: string
}
