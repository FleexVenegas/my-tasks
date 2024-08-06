import { CreateTask } from "@renderer/interfaces/Props.interfaces"

export const api = {
    getData: (op: string) => {
        // @ts-ignore (define in dts)
        return window.electron.ipcRenderer.invoke('get-data', op)
    },

    createTask: (task: CreateTask) => {
        return window.electron.ipcRenderer.invoke('create-task', task)
    }
}
