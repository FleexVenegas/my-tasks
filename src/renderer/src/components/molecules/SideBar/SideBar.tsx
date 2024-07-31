// Styles
import { ClassProps } from '@renderer/interfaces/Props.interfaces'
import './SideBar.scss'

//Assets
import Folder from '../../../assets/images/folderColors.jpg'
import CheckBox from '@renderer/components/atoms/CheckBox/CheckBox'

const SideBar = ({ className = '' }: ClassProps) => {
    const tasks = [
        {
            id: 1,
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: 2,
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: 1,
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: 2,
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: 1,
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: 2,
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: 1,
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: 2,
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: 1,
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: 2,
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: 1,
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: 2,
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        }
    ]

    return (
        <aside className={`SideBar ${className}`}>
            <div className="s-cnt-header">
                <img src={Folder} alt="" className="s-image" />
                <div className="s-back-white">MIS TAREAS</div>
            </div>
            <div className="s-tasks">
                <ul className="s-ul">
                    {tasks.map((_, idx) => (
                        <li key={idx} className="s-li">
                            <span>{_.task}</span>
                            <CheckBox isChecked={_.status}/>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default SideBar
