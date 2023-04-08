import './Colaborator.css'

function Colaborator(props) {
    // JSX
    return (
        <div className='colaborator'>
            <div className='header' style={{backgroundColor: props.bgColor}}>
            </div>
            <div className='body'>
                <img src={props.colaborator.image} />
                <div className='content'>
                    <div className='name'>{props.colaborator.name}</div>
                    <div className='job'>{props.colaborator.job}</div>
                </div>
            </div>            
        </div>
    )
}

export default Colaborator