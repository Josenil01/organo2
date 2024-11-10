import "./Forms.css";
import TextBox from "../TextBox";
import DropDown from "../DropDown";
import Button from "../Button";
import {useState} from 'react'

const Forms = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time,SetTime] = useState('')

    const Save = (evento) => {
        evento.preventDefault()
        props.colabSaved({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        SetTime('')
    } 
// teste forcado
    return (
        <section className="Forms">
            <form onSubmit={Save}>
                <h2>Preencha os dados para criar o Card do colaborador</h2>
                <TextBox required = {true} label='Nome' placeholder='Digite o nome' valor = {nome} isChange={nome => setNome(nome)} />
                <TextBox required= {true} label='Cargo' placeholder='Digite o cargo'  valor = {cargo} isChange={cargo => setCargo(cargo)}/>
                <TextBox required= {true} label='Imagem' placeholder='Digite o endereço da imagem'  valor = {imagem} isChange={imagem => setImagem(imagem)} />
                <DropDown required= {true} label= 'Time' itens={props.times}  valor={time} isTyping={valor =>SetTime(valor)}/>
                <Button text='Criar Card' />
            </form>
        </section>
    )
}

export default Forms;