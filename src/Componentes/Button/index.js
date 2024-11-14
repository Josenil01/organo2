import "./Button.css"

const Button = (props) =>{
    
    return(
        <button className='Button'>{props.text}</button>
    )
}

export default Button