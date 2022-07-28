import Button from '../Button/Button'
import Link from 'next/link'
import style from './HomepageText.module.css'


const HomepageText = ({ type, loading }) => {
    return (
        <div className={`${style.container} ${type === 'ux' ? style.ux : style.fe} ${loading ? '' : style.loaded}`}>
            <p>{type === 'ux' ? 'I design' : 'I develop'}</p>
            <div className={style.title} >
                <h1 className={style.small}>{type === 'ux' ? 'User' : 'Web'}</h1>
                <h1 className={style.large}>{type === 'ux' ? 'Experiences' : 'Interfaces'}</h1>
            </div>
            <p>{type === 'ux' ? `I'm dedicated to improving the usability of user interfaces.` : 'I enjoy building web interfaces using HTML, CSS, Vanilla JS, and React.'}</p>
            {type === 'ux' ? <Link href="/portfolio/ux"><a><Button type="large" text="UX Porfolio" /></a></Link> : <Link href="/portfolio/web"><a><Button type="large" text="Web Porfolio" /></a></Link>}
        </div>
    )
}

export default HomepageText
