import Card from '../Card'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }
    return (
        (props.colabs.length>0) && <section className='Time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colab'>
                {props.colabs.map(colab => <Card key={colab.nome} src={colab.imagem} nome={colab.nome} cargo={colab.cargo} corPrimaria={props.corPrimaria} />)}
            </div>
            {/* <Card src='https://github.com/Josenil01.png' nome='Josenil Ezequiel' cargo ='CEO'/> */}
        </section>
    )
}

export default Time