import Card from '../Card'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    console.log(props)
    return (
         (props.colabs.length > 0) &&
        <section className='Time' style={{ backgroundColor:hexToRgba( props.corPrimaria,'0.3') }}>
            <input
                value={props.corPrimaria}
                onChange={evento => props.mudarCor(evento.target.value, props.id)}
                type='color' className='input-color'
            />
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colab'>
                 {props.colabs.map(colab => {
                    return <Card id={colab.id} key={colab.id} src={colab.imagem} nome={colab.nome} cargo={colab.cargo} corPrimaria={props.corPrimaria} aoDeletar={props.aoDeletar} />;
                })} 

            </div>
            {/* <Card src='https://github.com/Josenil01.png' nome='Josenil Ezequiel' cargo ='CEO'/> */}
        </section>
    )
}

export default Time