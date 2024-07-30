import { LayoutProps } from '@renderer/interfaces/Props.interfaces'
import './CardView.scss'

const CardView = ({ children, className = '' }: LayoutProps) => {
    return <div className={`CardView ${className}`}>{children}</div>
}

export default CardView
