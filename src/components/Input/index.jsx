import { InputCommand } from './style'

export const Input = ({change, placeholder, icon}) => {
    return(
        <InputCommand>
            <input className="categoryInput" onChange={(input)=>change(input.target.value)} placeholder={placeholder}/>
            <button className="searchBtn">
                {icon}
            </button>
        </InputCommand>
    )
}