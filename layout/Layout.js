import Navigation from "../components/Navigation/Navigation"
import style from "./Layoutstyle.module.css"

const Layout = ({ children }) => {
    return (
        <div className={style.pageContainer}>
            <Navigation />
            {children}   
        </div>
    )
}

export default Layout