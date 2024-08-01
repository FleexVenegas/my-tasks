//Styles
import { useEffect, useState } from 'react'
import { useStoreTask } from '../../zustan/ZustanContext'
import './Task.scss'
import CardView from '../../components/molecules/CardView/CardView'
import TaskView from '@renderer/components/molecules/TaskView/TaskView'

const Task = () => {
    const { task } = useStoreTask()
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        setIsSelected(true)
    }, [task])

    return (
        <>
            <CardView className="Task">
                {isSelected && <TaskView />}


                
            </CardView>

        </>
    )
}

export default Task
