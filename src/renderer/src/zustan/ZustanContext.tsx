import { create } from 'zustand'

type Store = {
    task: string | null
    selectedTask: (id: string) => void
    card: number | null
    selectedCard: (id: number | null) => void
}

export const useStoreTask = create<Store>()((set) => ({
    task: null,
    selectedTask: (task) => set({ task: task }),
    card: null,
    selectedCard: (card) => set({ card: card })
}))
