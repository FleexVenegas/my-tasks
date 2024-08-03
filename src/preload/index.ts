import { contextBridge, ipcRenderer } from 'electron'

const api = {
    ipcRenderer: {
        send: (channel: string, data: any) => {
            ipcRenderer.send(channel, data)
        },
        on: (channel: string, listener: (...args: any[]) => void) => {
            ipcRenderer.on(channel, listener)
        },
        invoke: (channel: string, data: any) => {
            return ipcRenderer.invoke(channel, data)
        }
    }
}

if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', {
            ipcRenderer: api.ipcRenderer
        })
        contextBridge.exposeInMainWorld('api', api)
    } catch (error) {
        console.error('Error en contextBridge:', error)
    }
} else {
    // @ts-ignore (define in dts)
    window.electron = {
        ipcRenderer: api.ipcRenderer
    }
    // @ts-ignore (define in dts)
    window.api = api
}
