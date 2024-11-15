
import "./Input.css"
const Input =(props)=>{
    // O elemento cede o controle do seu comportamento para o elemento superior "Forms"
    const isTyping = (event) => {
        props.isChange(event.target.value)
    }
    return(
        <div className={`Input Input-${props.type}`}>
            <label>{props.label}</label>
            <input type={props.type} value ={props.valor} onChange={isTyping} required ={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input