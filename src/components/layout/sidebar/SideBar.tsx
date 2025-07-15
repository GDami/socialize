import './SideBar.css'

type SideBarProps = {
    onTabClick: (string) => void
}

export default function SideBar(props: SideBarProps) {
    return (
        <div className="sidebar">
            <div className="main-logo-container">
                <img></img>
            </div>
            <nav>

            </nav>
        </div>
    )
}