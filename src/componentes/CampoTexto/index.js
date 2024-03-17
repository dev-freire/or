import './CampoTexto.css'

const CampoTexto = (props) =>  {

    const placeholderModificada = `${props.placeholder}...` 

    //let valor = 'Lorival Freire'
    //const [valor, setValor] = useState('lorival')

    const aoDigitado = (evento) => {
        
        props.aoAlterado(evento.target.value)

    }
    

    
    return(
        <div className = "campo-texto">
            <label>{props.label}</label>
            <input 
                value={props.valor}
                onChange ={aoDigitado}
                placeholder={placeholderModificada}
                required={props.obrigatorio}
            />
        </div>
    )
    

}

export default CampoTexto