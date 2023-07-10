const Button = (props) => {
    return <button className={`${props.className} calc-btn`} id={props.id} onClick={props.onClick}>{props.label}</button>
}

export default Button;