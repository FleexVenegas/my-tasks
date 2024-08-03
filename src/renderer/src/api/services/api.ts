export const api = {
    getData: (searchOption: any) => {
        // @ts-ignore (define in dts)
        return window.electron.ipcRenderer.invoke('get-data', searchOption)
    },

    getDataTotal: () => {
        // @ts-ignore (define in dts)
        return window.electron.ipcRenderer.invoke('get-total')
    }
}
