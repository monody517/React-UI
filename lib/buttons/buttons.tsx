import scopedClassMeak from '../helper/classMeak'
import * as React from 'react'
import './button.scss'

const scopedClass = scopedClassMeak('jui-button')
const sc = scopedClass

interface Props{
    type:string;
    children:React.ReactNode
    click?:Function;
}

const Buttons:React.FunctionComponent<Props> = (props) =>{
    const handleClick = () => {
        if(!props.click) return;
        props.click()
    }
    return (
            <button 
            onClick={()=>{
                handleClick()
            }}
            className={sc('',{extra:props.type})}>
            {props.children}
            </button>
        )
}

export default Buttons

