import { useState } from 'react'

import "./Form.css";
import TextInput from "../TextInput"
import Dropdown from "../Dropdown";
import Button from "../Button";



const Form = (props) => {

    // let [name, setName] = useState('Marco')
    // let [job, setJob] = useState('Desenvolvedor')
    // let [image, setImage] = useState('https://avatars.githubusercontent.com/u/14317627?v=4')
    // let [team, setTeam] = useState('3')
    let [name, setName] = useState('')
    let [job, setJob] = useState('')
    let [image, setImage] = useState('')
    let [team, setTeam] = useState(1)
    
    const onSubmit = (ev) => {
        ev.preventDefault()
        let newColaborator = {
            name, job, image, team
        }
        props.onAddColaborator(newColaborator)
        setName('')
        setJob('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="formWrapper">
            <form onSubmit={onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput onChange={name => setName(name)} value={name} label="Nome" placeholder="Digite seu nome" />
                <TextInput onChange={job => setJob(job)} value={job} label="Cargo" placeholder="Digite seu cargo" />
                <TextInput onChange={image => setImage(image)} value={image} label="Imagem" placeholder="Informe o endereço da imagem" />
                <Dropdown onChange={team => {console.log(team);setTeam(team)}} value={team} label="Time" items={props.teams} />
                <Button>Criar card</Button>
            </form>
        </section>
    )

}

export default Form