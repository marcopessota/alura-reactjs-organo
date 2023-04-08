import './TextInput.css'

const TextInput = (props) => {
    
    const onChange = (evt) => {
        props.onChange(evt.target.value)
    }

    // JSX
    return (
        <div className='text-input'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onChange} type="text" placeholder={props.placeholder} />
        </div>
    )
}


export default TextInput