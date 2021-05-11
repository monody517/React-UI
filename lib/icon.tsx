import React from 'react'
// import wechat from './icons/wechat.svg'
import './importIcons.js'
import './icon.scss'


interface IconProps {
    name:string;
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
    return(      
        <svg className="icon">
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon