import { ChangeEventHandler } from 'react'

import "./Input.scss"

interface InputProps {
    className?: string
    text?: string
    name?: string
    value?: string
    type: 'text' | 'email' | 'number'
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input = ({
    className = '',
    text,
    name,
    value,
    type = 'text',
    placeholder,
    onChange
}: InputProps) => {
    return (
        <div className={`Input ${className}`}>
            {text && <span className="title-input">{text}</span>}
            <input
                className={'cs-input'}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}
export default Input
