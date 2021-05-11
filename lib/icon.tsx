import React, { SVGAttributes } from 'react'
// import wechat from './icons/wechat.svg'
import './importIcons.js'
import './icon.scss'
import classnames from './helper/classNames'

interface IconProps extends SVGAttributes<SVGElement>{
    name:string;
}

const Icon:React.FunctionComponent<IconProps> = (props) => {
    return(
        <svg className={classnames("icon",props.name)} {...props}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon