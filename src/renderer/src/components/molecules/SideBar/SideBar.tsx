// Styles
import { ClassProps } from '@renderer/interfaces/Props.interfaces'
import './SideBar.scss'

//Assets
import Folder from '../../../assets/images/folderColors.jpg'
// import CheckBox from '@renderer/components/atoms/CheckBox/CheckBox'
import { useStoreTask } from '@renderer/zustan/ZustanContext'
import Input from '../../..//components/atoms/Input/Input'
import { useEffect, useState } from 'react'
import { api } from '../../../api/services/api'
import CheckBox from '@renderer/components/atoms/CheckBox/CheckBox'

interface dataResponse {
    id: string
    title: string
    description: string
    status: string | boolean
    completed_at: string
    created_at: string
    updated_at: string
}

interface dataRes_ {
    status: number
    data: dataResponse[]
}

const SideBar = ({ className = '' }: ClassProps) => {
    const [tasks, setTasks] = useState<dataResponse[]>([])

    const { selectedTask } = useStoreTask()

    useEffect(() => {
        try {
            api.getData('p').then((response: dataRes_) => {
                const { status, data } = response

                if (status) {
                    const newArray = data.map((item) => {
                        return {
                            ...item,
                            status: item.status === 'in_progress' ? false : ''
                        }
                    })

                    setTasks(newArray)
                }
            })
        } catch (error) {
            console.log(`Ocurrio un error ${error}`)
        }
    }, [])

    const [isCheck, setIsCheck] = useState(false)

    useEffect(() => {
        if (isCheck) {
            alert('Actibando')
        }
    }, [isCheck])

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
                            <CheckBox
                                isChecked={typeof _.status === 'boolean' ? _.status : false}
                                setIsChecked={setIsCheck}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default SideBar
