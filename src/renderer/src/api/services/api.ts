export const api = {
    getData: (op: string) => {
        // @ts-ignore (define in dts)
        return window.electron.ipcRenderer.invoke('get-data', op)
    }
}
