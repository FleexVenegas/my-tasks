import { useState } from 'react'
import './Toggle.scss'

interface ToggleProps {
    initialValue?: boolean
}

const Toggle = ({ initialValue = false }: ToggleProps) => {
    const [checked, setChecked] = useState(initialValue)

    const handleToggle = () => {
        setChecked(!checked)
    }

    return (
        <div className={`Toggle ${checked ? 'checked' : ''}`} onClick={handleToggle}>
            <div className="circle"></div>
        </div>
    )
}

export default Toggle
