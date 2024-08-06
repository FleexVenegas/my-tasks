// Styles
import { ClassProps } from '@renderer/interfaces/Props.interfaces'
import './SideBar.scss'

//Assets
import Folder from '../../../assets/images/folderColors.jpg'
// import CheckBox from '@renderer/components/atoms/CheckBox/CheckBox'
import { useStoreTask } from '@renderer/zustan/ZustanContext'
import Input from '@renderer/components/atoms/Input/Input'
import { useEffect } from 'react'
import { api } from '@renderer/api/services/api'

const SideBar = ({ className = '' }: ClassProps) => {
    const tasks = [
        {
            id: '1',
            title: 'Bugs',
            date: '01/07/2024',
            date_: '01/07/2024',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non eaque magnam fugit voluptates molestiae.',
            is_active: true
        },
        {
            id: '2',
            title: 'Bugs',
            date: '01/07/2024',
            date_: '01/07/2024',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non eaque magnam fugit voluptates molestiae.',
            is_active: true
        },
        {
            id: '3',
            title: 'Bugs',
            date: '01/07/2024',
            date_: '01/07/2024',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non eaque magnam fugit voluptates molestiae.',
            is_active: true
        },
        {
            id: '4',
            title: 'Bugs',
            date: '01/07/2024',
            date_: '01/07/2024',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non eaque magnam fugit voluptates molestiae.',
            is_active: true
        }
    ]

    const { selectedTask } = useStoreTask()

    useEffect(() => {
        try {
            api.getData('p').then((response) => {
                console.log(response.data)
            })
        } catch (error) {
            console.log(`Ocurrio un error ${error}`)
        }
    }, [])

    return (
        <aside className={`SideBar ${className}`}>
            <div className="s-cnt-header">
                <img src={Folder} alt="" className="s-image" />
                <div className="s-back-white">MIS TAREAS</div>
            </div>
            <div className="s-tasks">
                <div className="s-cnt_in">
                    <Input type="text" placeholder="Buscar..." />
                </div>
                <ul className="s-ul">
                    {tasks.map((_, idx) => (
                        <li key={idx} className="s-li" onClick={() => selectedTask(_.id)}>
                            <span>{_.title}</span>
                            {/* <CheckBox isChecked={_.status} /> */}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default SideBar
