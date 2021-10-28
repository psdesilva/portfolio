import { useRouter } from "next/router";
import style from './Navstyle.module.css'

const checkCurrentPage = (path) => {
    const router = useRouter()

    if (router.pathname === path) {
        return style.highlighted
    }
    return ''
}

export default checkCurrentPage;