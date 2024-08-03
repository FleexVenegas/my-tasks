import { ClassProps } from '@renderer/interfaces/Props.interfaces'
import './Header.scss'
import Button from '@renderer/components/atoms/Button/Button'
import { useStoreTask } from '@renderer/zustan/ZustanContext'

//Assets
// import { second } from '../../../assets'

const Header = ({ className }: ClassProps) => {
    const { setNewTask } = useStoreTask()

    return (
        <header className={`Header ${className}`}>
            <div className="h-container">
                <Button text="Nueva tarea" className="submit" onClick={() => setNewTask(true)} />
            </div>
        </header>
    )
}

export default Header
