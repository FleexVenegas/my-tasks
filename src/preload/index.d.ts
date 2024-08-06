import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
    interface Window {
        electron: {
            ipcRenderer: any
        }
        api: any
    }
}
