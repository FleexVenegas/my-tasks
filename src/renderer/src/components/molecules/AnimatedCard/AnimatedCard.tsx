import { ReactNode, useEffect, useState } from 'react'

//Styles
import './AnimatedCard.scss'

interface AnimatedProps {
    className?: string
    children: ReactNode
    setClose: (value: boolean) => void
}

const AnimatedCard = ({ className = '', children, setClose }: AnimatedProps) => {
    const [opacity, setOpacity] = useState(false)

    const handleClose = () => {
        setOpacity(false)
        setTimeout(() => {
            document.body.classList.remove('no-scroll')
            setClose(false)
        }, 500)
    }

    useEffect(() => {
        const openTimeout = setTimeout(() => {
            setOpacity(true)
        }, 500)

        return () => clearTimeout(openTimeout)
    }, [])

    return (
        <div className={`AnimatedCard ${className}`}>
            <div className={`cnt-animated ${opacity ? 'opacity-on' : ''}`}>
                <button className="c-btn-close" type="button" onClick={handleClose}>
                    ✖️
                </button>
                {children}
            </div>
        </div>
    )
}

export default AnimatedCard
