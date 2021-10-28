import Button from '../Button/Button'
import style from './HomepageText.module.css'

const HomepageText = ({ type, loading }) => {
    return (
        <div className={`${style.container} ${type === 'ux' ? style.ux : style.fe} ${loading ? '' : style.loaded}`}>
            <p>{type === 'ux' ? 'I conduct' : 'I develop'}</p>
            <div className={style.title} >
                <h1 className={style.small}>{type === 'ux' ? 'UX' : 'Front-end'}</h1>
                <h1 className={style.large}>{type === 'ux' ? 'Research' : 'Interfaces'}</h1>
            </div>
            <p>{type === 'ux' ? `I'm dedicated to improving the usability of user interfaces.` : 'I enjoy building web interfaces using HTML, CSS, Vanilla JS, and React.'}</p>
            <Button type="large" text={type === 'ux' ? 'UX Porfolio' : 'Web Dev Portfolio'} backgroundColor={type === 'ux' ? 'light' : 'dark'}/>
        </div>
    )
}

export default HomepageText
