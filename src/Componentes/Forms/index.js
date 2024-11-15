import "./Forms.css";
import Input from "../Input";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Forms = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, SetTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corDoTime, SetCorDoTime] = useState('')

    const Save = (evento) => {
        evento.preventDefault()
        props.colabSaved({
            id: uuidv4(),
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
        <section className="formulario-container">
            <form className="formulario" onSubmit={Save}>
                <h2>Preencha os dados para criar o Card do colaborador</h2>
                <Input type={'text'} required={true} label='Nome' placeholder='Digite o nome' valor={nome} isChange={nome => setNome(nome)} />
                <Input type={'text'} required={true} label='Cargo' placeholder='Digite o cargo' valor={cargo} isChange={cargo => setCargo(cargo)} />
                <Input type={'text'}required={true} label='Imagem' placeholder='Digite o endereço da imagem' valor={imagem} isChange={imagem => setImagem(imagem)} />
                <DropDown required={true} label='Time' itens={props.times} valor={time} isTyping={valor => SetTime(valor)} />
                <Button text='Criar Card' />
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault(); // Previne o comportamento padrão de envio do formulário
                props.cadastrarTime({ id:uuidv4(), nome:nomeTime, corPrimaria:corDoTime }); // Chama a função cadastrarTimes
            }}>

                <h2>Preencha os dados para criar um novo Time</h2>
                <Input
                    type={'text'}
                    required
                    label='Time'
                    placeholder='Digite o nome do Time'
                    valor={nomeTime}
                    isChange={valor => setNomeTime(valor)}
                />
                <Input
                    required
                    label='Cor'
                    placeholder='Digite a cor do Time'
                    type='color'
                    valor={corDoTime}
                    isChange={valor => SetCorDoTime(valor)} />
                <Button text='Criar Time' />
            </form>
        </section>
    )
}

export default Forms;