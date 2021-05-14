import scopedClassMeak from '../helper/classMeak'
import * as React from 'react'
import './button.scss'

const scopedClass = scopedClassMeak('jui-button')
const sc = scopedClass

interface Props{
    type?:string
}

const Button:React.FunctionComponent<Props> = (props) =>{
    
    return (
        <div className={sc('',{extra:props.type})}><span>{props.type? props.type : 'default'}</span></div>
    )
}
export default Button