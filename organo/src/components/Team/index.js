import Colaborator from '../Cards/Colaborator'
import './Team.css'

function Team(props) {
    // JSX
    return (
        props.colaborators.length > 0 ?
        <section className="team" style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderColor: props.primaryColor}}>{props.title}</h3>
            <div className='colaboratorsWrapper'>
                {props.colaborators.map(colaborator => <Colaborator key={colaborator.name} colaborator={colaborator} bgColor={props.primaryColor} />)}
            </div>
        </section>
        : ''
    )
}

export default Team