// Styles
import './Layout.scss'

//Interfaces
import { LayoutProps } from '@renderer/interfaces/Props.interfaces'

const Layout = ({ children, className = '' }: LayoutProps) => {
    return (
        <div className={`Layout ${className}`}>
            <header className="Header_">Header</header>
            <aside className="Aside_">Aside</aside>
            <main className="View_">{children}</main>
            <footer className="Footer_">Footer</footer>
        </div>
    )
}

export default Layout
