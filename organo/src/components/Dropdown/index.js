import "./Dropdown.css"

const Dropdown = (props) => {

    const onChange = (evt) => {
        props.onChange(evt.target.value)
    }

    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={onChange} value={props.value}>
                {props.items.map(item => {
                    return <option key={item.id} value={item.id}>{item.label}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown