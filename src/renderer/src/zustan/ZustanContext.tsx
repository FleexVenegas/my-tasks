import { create } from 'zustand'

type Store = {
    task_id: string
    selectedTask: (id: string) => void
    card: number | null
    selectedCard: (id: number | null) => void
    newTask: boolean
    setNewTask: (value: boolean) => void

    viewTask: boolean
    setViewTask: (value: boolean) => void
}

export const useStoreTask = create<Store>()((set) => ({
    task_id: '',
    selectedTask: (task) => set({ task_id: task }),

    card: null,
    selectedCard: (card) => set({ card: card }),
    
    newTask: false,
    setNewTask: (newTask) => set({ newTask: newTask }),

    viewTask: false,
    setViewTask: (viewTask) => set({ viewTask: viewTask })
}))
