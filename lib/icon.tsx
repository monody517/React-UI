import React from 'react'
// import wechat from './icons/wechat.svg'
import './importIcons.js'
import './icon.scss'


interface IconProps {
    name:string;
    onClick:()=>void
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
    return(      
        <svg className="icon" onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon