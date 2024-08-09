import { Dispatch, SetStateAction, useEffect, useState } from 'react'

//Styles
import './TaskView.scss'

//Assets
import Delete from '../../../assets/icons/delete.svg'
import Edit from '../../../assets/icons/edit.svg'

//components
import Toggle from '@renderer/components/atoms/Toggle/Toggle'
import { api } from '@renderer/api/services/api'
import { responseTask } from '@renderer/interfaces/Props.interfaces'

interface TaskViewProps {
    id: string
    // setClose: Dispatch<SetStateAction<boolean>>
}

const TaskView = ({ id }: TaskViewProps) => {
    // const [cardClose, setCardClose] = useState(false)
    const [overEdit, setOverEdit] = useState(false)
    const [overRemove, setOverRemove] = useState(false)
    const [info, setInfo] = useState<responseTask[]>([])

    useEffect(() => {
        const getTaskOne = () => {
            console.log(id)
            try {
                api.getTaskOne(id).then((response: any) => {
                    const { status, data } = response
                    if (status) {
                        console.log(data)
                        if (data && data !== undefined) {
                            setInfo([data])
                        }
                    }
                })
            } catch (error) {
                console.log(`Ocurrio un error ${error}`)
            }
        }

        getTaskOne()
    }, [])

    const handleEdit = (id: string) => {
        alert(`Id: ${id}`)
    }

    const handleRemove = (id: string) => {
        alert(`Id: ${id}`)
    }

    const handleMouse = (setter: any, value: boolean) => () => setter(value)

    const onMouseEdit = handleMouse(setOverEdit, true)
    const onMouseEditLeave = handleMouse(setOverEdit, false)
    const onMouseRemoveEnter = handleMouse(setOverRemove, true)
    const onMouseRemoveLeave = handleMouse(setOverRemove, false)

    return (
        <div className="TaskView">
            {info?.map((_, idx) => (
                <div
                    className={`t-cnt-task ${overRemove ? 'bg-delete' : ''} ${overEdit ? 'bg-edit' : ''}`}
                    key={idx}
                >
                    <div className="t-cnt-up">
                        <div className="t-header">
                            <h3 className="t-tile">{_.title}</h3>
                            <div className="t-cnt-d-btn">
                                <div className="t-cnt-dates">
                                    <span className="t-date">{_.created_at}</span>-
                                    <span className="t-date">{_.created_at}</span>
                                </div>
                                <div className="t-btn">
                                    <button
                                        className="t-btn_ac"
                                        onMouseEnter={onMouseEdit}
                                        onMouseLeave={onMouseEditLeave}
                                        onClick={() => handleEdit(_.id)}
                                    >
                                        <img src={Edit} alt="" className="t-img" />
                                    </button>
                                    <button
                                        className="t-btn_ac"
                                        onClick={() => handleRemove(_.id)}
                                        onMouseEnter={onMouseRemoveEnter}
                                        onMouseLeave={onMouseRemoveLeave}
                                    >
                                        <img src={Delete} alt="" className="t-img" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="t-cnt-body">
                            <span className="s-title-spa">Descripción</span>
                            <p className="t-description">{_.description}</p>
                        </div>
                    </div>

                    <div className="t-cnt-sta">
                        <span className="s-title-spa">Marcar como completada</span>
                        <Toggle initialValue={_.status === 'in_progress' ? false : true} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskView
