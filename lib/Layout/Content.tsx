import React, { HTMLAttributes } from 'react'
import scopedClassMeak from '../helper/classMeak'

interface contentProps extends HTMLAttributes<HTMLElement>{ 
    
}
const sc =scopedClassMeak('jui-layout')

const Content:React.FunctionComponent<contentProps> = (props) => {
    const {className,...rest}=props
    return(
        <div className={sc('content',{extra:className})} {...rest}>
            {props.children}
        </div>
    )
}

export default Content