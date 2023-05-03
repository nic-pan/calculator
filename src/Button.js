const Button = (props) => {
    return <button className="calc-btn" id={props.id} onClick={props.onClick}>{props.label}</button>
}

export default Button;