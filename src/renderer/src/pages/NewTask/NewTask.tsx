import { ChangeEvent, FormEvent, useState } from 'react'

//Styles
import './NewTask.scss'

//Components
import Input from '../../components/atoms/Input/Input'
import TextArea from '../../components/atoms/TextArea/TextArea'
import Button from '../../components/atoms/Button/Button'
import { api } from '../../api/services/api'
import { Successfully } from '@renderer/components/molecules/SweetAlert/SweetAlert'
import { useStoreTask } from '@renderer/zustan/ZustanContext'

const NewTask = () => {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const { setNewTask } = useStoreTask()

    const eventChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget
        setTask((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        api.createTask(task).then((response) => {
            const { status, data } = response
            if (status) {
                Successfully(data.message)
                setTimeout(() => {
                    setNewTask(false)
                }, 2500)
            }
        })
    }

    return (
        <div className="NewTask">
            <form onSubmit={handleSubmit} className="n-form">
                <Input text="Titulo" type="text" name="title" onChange={eventChange} required />
                <TextArea text="Descripción" name="description" onChange={eventChange} required />
                <div className="n-cnt-btn">
                    <Button text="Guardar" className="submit" />
                </div>
            </form>
        </div>
    )
}

export default NewTask
