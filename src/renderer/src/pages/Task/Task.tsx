//Styles
import { useEffect, useState } from 'react'
import { useStoreTask } from '../../zustan/ZustanContext'
import './Task.scss'
import CardView from '../../components/molecules/CardView/CardView'
// import TaskView from '../../components/molecules/TaskView/TaskView'
import ReportCard from '../../components/organisms/ReportCard/ReportCard'
import Table from '../../components/organisms/Table/Table'
import { columns } from './TableData'

const Task = () => {
    // const { task, card } = useStoreTask()
    // const [isSelected, setIsSelected] = useState(false)

    // useEffect(() => {
    //     setIsSelected(true)
    // }, [task])

    const data = []

    // const db = initializeDatabase()

    return (
        <>
            <CardView className="Task">
                {/* {isSelected && <TaskView />} */}

                <ReportCard />
                <div className="t-body_">
                    <div className="t-cnt-table">
                        <Table columns={columns} data={data} actions actionsColumnName="Acciones" />
                    </div>
                </div>
            </CardView>
        </>
    )
}

export default Task
