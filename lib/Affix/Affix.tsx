import React from 'react'
import scopedClassMeak from '../helper/classMeak'
import './Affix.scss'

const scopedClass = scopedClassMeak('jui-affix')
const sc = scopedClass

interface Props{
    distance:Number
    children:React.ReactNode
}

const Affix:React.FunctionComponent<Props> = (porps) => {
    return (
        <div className = {sc('')}>{porps.children}</div>
    )
}

export default Affix