import scopedClassMeak from '../helper/classMeak'
import React, { HTMLAttributes } from 'react'

interface footerProps extends HTMLAttributes<HTMLElement>{ 
    
}
const sc =scopedClassMeak('jui-layout')

const Footer:React.FunctionComponent<footerProps> = (props) => {
    const {className,...rest}=props
    return(
        <div className={sc('footer',{extra:className})} {...rest}>
            {props.children}
        </div>
    )
}

export default Footer