// Styles
import SideBar from '@renderer/components/molecules/SideBar/SideBar'
import './Layout.scss'

//Interfaces
import { LayoutProps } from '@renderer/interfaces/Props.interfaces'
import Header from '@renderer/components/molecules/Header/Header'

const Layout = ({ children, className = '' }: LayoutProps) => {
    return (
        <div className={`Layout ${className}`}>
            <Header className="Header_" />
            <SideBar className="Aside_" />
            <main className="View_">{children}</main>
            {/* <footer className="Footer_">Footer</footer> */}
        </div>
    )
}

export default Layout
