import "./DropDown.css"

const DropDown = (props) =>{
    
    //console.log(props)
    return(
        <div className = "DropDown">
            <label>{props.label}</label>
            <select onChange={event => props.isTyping(event.target.value)} required={props.required} value={props.valor}>
               <option value=''></option>
                {props.itens.map((item, index) =>(<option key ={index}>{item}</option>)) }
            </select>
        </div>       
    )

}

export default DropDown;