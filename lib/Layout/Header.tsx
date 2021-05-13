import React, { HTMLAttributes } from 'react'
import scopedClassMeak from '../helper/classMeak'

interface headerProps extends HTMLAttributes<HTMLElement>{ 
    
}
const sc =scopedClassMeak('jui-layout')

const Header:React.FunctionComponent<headerProps> = (props) => {
    const {className,...rest}=props
    return(
        <div className={sc('header',{extra:className})} {...rest}>
            {props.children}
        </div>
    )
}

export default Header