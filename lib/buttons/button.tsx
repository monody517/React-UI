import scopedClassMeak from '../helper/classMeak'
import * as React from 'react'
import './button.scss'

const scopedClass = scopedClassMeak('jui-button')
const sc = scopedClass

interface Props{
    type?:string
}

const Button:React.FunctionComponent<Props> = (props) =>{
    let [x,setX] = React.useState(false)
    const changeX = () =>{
        return x = !x
    }
    return (
            <button onClick={()=>{setX(changeX)}} className={sc('',{extra:props.type})}><span>{props.type? props.type : 'default'}</span></button>    
        )
}

export default Button

