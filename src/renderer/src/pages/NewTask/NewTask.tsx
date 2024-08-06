import Input from '../../components/atoms/Input/Input'
import './NewTask.scss'
import TextArea from '../../components/atoms/TextArea/TextArea'
import Button from '@renderer/components/atoms/Button/Button'

const NewTask = () => {
    return (
        <div className="NewTask">
            <Input text="Titulo" type="text" />
            <TextArea text="Descripción" />
            <div className="n-cnt-btn">
                <Button text="Guardar" className="submit" />
            </div>
        </div>
    )
}

export default NewTask
