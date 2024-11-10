import "./TextBox.css"
const TextBox =(props)=>{
    // O elemento cede o controle do seu comportamento para o elemento superior "Forms"
    const isTyping = (event) => {
        props.isChange(event.target.value)
    }
    return(
        <div className="TextBox">
            <label>{props.label}</label>
            <input value ={props.valor} onChange={isTyping} required ={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextBox;