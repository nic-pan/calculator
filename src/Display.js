const Display = (props) => {

    return <div id="display">
        <span className="display-6">
           {props.content}
        </span>
    </div>
}
export default Display;