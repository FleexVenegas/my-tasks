import Toggle from '@renderer/components/atoms/Toggle/Toggle'
import './TaskView.scss'

//Assets
import Delete from '../../../assets/icons/delete.svg'
import Edit from '../../../assets/icons/edit.svg'
import { useState } from 'react'

const TaskView = () => {
    const [overEdit, setOverEdit] = useState(false)
    const [overRemove, setOverRemove] = useState(false)

    const info = [
        {
            id: '1',
            title: 'Bugs',
            date: '01/07/2024',
            date_: '01/07/2024',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non eaque magnam fugit voluptates molestiae.',
            is_active: true
        }
    ]

    const handleEdit = (id: string) => {
        alert(`Id: ${id}`)
    }

    const handleRemove = (id: string) => {
        alert(`Id: ${id}`)
    }

    const onMouseEdit = () => {
        setOverEdit(true)
    }

    const onMouseEditLeave = () => {
        setOverEdit(false)
    }

    const onMouseRemoveEnter = () => {
        setOverRemove(true)
    }
    const onMouseRemoveLeave = () => {
        setOverRemove(false)
    }

    return (
        <div className="TaskView">
            
            {info.map((_, idx) => (
                <div
                    className={`t-cnt-task ${overRemove ? 'bg-delete' : ''} ${overEdit ? 'bg-edit' : ''}`}
                    key={idx}
                >
                    <div className="t-cnt-up">
                        <div className="t-header">
                            <h3 className="t-tile">{_.title}</h3>
                            <div className="t-cnt-d-btn">
                                <div className="t-cnt-dates">
                                    <span className="t-date">{_.date}</span>-
                                    <span className="t-date">{_.date_}</span>
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
                        <Toggle initialValue={_.is_active} />
                    </div>

                    <button className="t-btn-close">✖️</button>
                </div>
            ))}
        </div>
    )
}

export default TaskView
