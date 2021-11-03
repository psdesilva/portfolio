import style from './Button.module.css'

const Button = ({ type, text, backgroundColor, submitBtn }) => {
    return (
        <button type={submitBtn ? "submit" : ''}  className={`${type === "small" ? style.small : style.large} ${backgroundColor === "dark" ? style.dark : style.light}`}>
            {text}
        </button>
    )
}

export default Button
