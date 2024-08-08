import React, { useState } from 'react'
import './Select.scss'

interface Option {
    value: string
    label: string
}

interface SelectProps {
    options: Option[]
    name: string
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<SelectProps> = ({ options, onChange, name, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState<string | null>(null)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleSelect = (value: string) => {
        setSelectedValue(value)
        // Crear un evento falso para pasar a onChange
        const event = {
            currentTarget: {
                value,
                name // Incluimos el name aquí
            }
        } as React.ChangeEvent<HTMLSelectElement>

        onChange(event)
        setIsOpen(false)
    }

    return (
        <div className="select-container">
            <div className="s-cnt-input" onClick={toggleDropdown}>
                <div className="select-header">
                    {selectedValue
                        ? options.find((option) => option.value === selectedValue)?.label
                        : placeholder}
                    <span className="arrow">{isOpen ? '▲' : '▼'}</span>
                </div>
            </div>
            <div className={`select-options ${isOpen ? 'open' : ''}`}>
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`select-option ${option.value === selectedValue ? 'selected' : ''}`}
                        onClick={() => handleSelect(option.value)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Select
