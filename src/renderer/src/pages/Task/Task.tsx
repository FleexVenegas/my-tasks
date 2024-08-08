//Styles
import { ChangeEvent, useEffect, useState } from 'react'
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
import Select from '@renderer/components/atoms/Select/Select'
import Input from '@renderer/components/atoms/Input/Input'

const Task = () => {
    const { newTask, setNewTask, task } = useStoreTask()
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        if (task !== null) {
            setIsSelected(true)
        }
    }, [task])

    const data = []

    const options = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' }
    ]

    const handleConfirm = (selectedValue: string) => {
        alert(`Has seleccionado: ${selectedValue}`)
    }

    const [data1, setData1] = useState({
        opt: ''
    })

    const eventChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.currentTarget

        setData1((prev) => ({
            ...prev,
            [name]: value
        }))
    }
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
                        {/* <Input text='a' type='text' onChange={eventChange}/> */}
                        <Select
                            options={options}
                            name="opt"
                            onChange={eventChange}
                            placeholder="Selecciona una opcion"
                        />
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
