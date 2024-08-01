import { create } from 'zustand'

type Store = {
    task: string | null
    selectedTask: (id: string) => void
}

export const useStoreTask = create<Store>()((set) => ({
    task: null,
    selectedTask: (task) => set({ task: task })
}))
