import scopedClassMeak from '../helper/classMeak'
import React, { HTMLAttributes } from 'react'
import './layout.scss'

interface LayoutProps extends HTMLAttributes<HTMLElement>{ 
    
}

const sc =scopedClassMeak('jui-layout')

const Layout:React.FunctionComponent<LayoutProps> = (props) => {
    const {className,...rest}=props
    return(
        <div className={[sc(),className].join(' ')} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout