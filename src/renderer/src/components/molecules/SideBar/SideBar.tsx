// Styles
import { ClassProps } from '@renderer/interfaces/Props.interfaces'
import './SideBar.scss'

//Assets
import Folder from '../../../assets/images/folderColors.jpg'
import CheckBox from '@renderer/components/atoms/CheckBox/CheckBox'
import { useStoreTask } from '@renderer/zustan/ZustanContext'

const SideBar = ({ className = '' }: ClassProps) => {
    const tasks = [
        {
            id: '1',
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: '2',
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: '3',
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: '4',
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: '5',
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: '6',
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: '7',
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: '8',
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: '9',
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: '10',
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        },
        {
            id: '11',
            task: 'Generar un reporte',
            date: '97/12/16',
            status: false
        },
        {
            id: '12',
            task: 'Corregir los bugs',
            date: '97/12/16',
            status: false
        }
    ]

    const { selectedTask } = useStoreTask()

    return (
        <aside className={`SideBar ${className}`}>
            <div className="s-cnt-header">
                <img src={Folder} alt="" className="s-image" />
                <div className="s-back-white">MIS TAREAS</div>
            </div>
            <div className="s-tasks">
                <ul className="s-ul">
                    {tasks.map((_, idx) => (
                        <li key={idx} className="s-li" onClick={() => selectedTask(_.id)}>
                            <span>{_.task}</span>
                            {/* <CheckBox isChecked={_.status} /> */}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default SideBar
