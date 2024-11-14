import './Card.css'
import { AiFillCloseCircle } from "react-icons/ai";
const Card = (props) => {
    return (
        <div className='Card'>
            < AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => props.aoDeletar(props.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: props.corPrimaria }}>
                <img src={props.src} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Card