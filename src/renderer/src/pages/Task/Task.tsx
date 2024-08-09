//Styles
import { ChangeEvent, useEffect, useState } from 'react'
import { useStoreTask } from '../../zustan/ZustanContext'
import './Task.scss'
import CardView from '../../components/molecules/CardView/CardView'
// import TaskView from '../../components/molecules/TaskView/TaskView'
import ReportCard from '../../components/organisms/ReportCard/ReportCard'
import Table from '../../components/organisms/Table/Table'
import { columns } from './TableData'
import AnimatedCard from '../../components/molecules/AnimatedCard/AnimatedCard'
import NewTask from '../NewTask/NewTask'
import TaskView from '../../components/molecules/TaskView/TaskView'

const Task = () => {
    const { newTask, setNewTask, task_id, viewTask, setViewTask } = useStoreTask()

    const data = []

    return (
        <>
            <CardView className="Task">
                {viewTask && (
                    <AnimatedCard setClose={setViewTask}>
                        <TaskView id={task_id} />
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
