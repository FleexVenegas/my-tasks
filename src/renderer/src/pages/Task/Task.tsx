//Styles
import { useEffect, useState } from 'react'
import { useStoreTask } from '../../zustan/ZustanContext'
import './Task.scss'
import CardView from '../../components/molecules/CardView/CardView'
// import TaskView from '../../components/molecules/TaskView/TaskView'
import ReportCard from '../../components/organisms/ReportCard/ReportCard'
import Table from '../../components/organisms/Table/Table'
import { columns } from './TableData'
import AnimatedCard from '@renderer/components/molecules/AnimatedCard/AnimatedCard'
import NewTask from '../NewTask/NewTask'
import TaskView from '@renderer/components/molecules/TaskView/TaskView'

const Task = () => {
    const { newTask, setNewTask, task } = useStoreTask()
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        if (task !== null) {
            setIsSelected(true)
        }
    }, [task])

    const data = []

    return (
        <>
            <CardView className="Task">
                {isSelected && (
                    <AnimatedCard setClose={setIsSelected}>
                        <TaskView id={task} />
                    </AnimatedCard>
                )}

                <ReportCard />
                <div className="t-body_">
                    <div className="t-cnt-table">
                        <Table columns={columns} data={data} actions actionsColumnName="Acciones" />
                    </div>
                </div>
                {newTask && (
                    <AnimatedCard setClose={setNewTask}>
                        <NewTask />
                    </AnimatedCard>
                )}
            </CardView>
        </>
    )
}

export default Task
