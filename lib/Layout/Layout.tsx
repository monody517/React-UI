import scopedClassMeak from '../helper/classMeak'
import React, { HTMLAttributes, ReactElement } from 'react'
import './layout.scss'
import Aside from './Aside'

interface LayoutProps extends HTMLAttributes<HTMLElement>{ 
    children:ReactElement | Array<ReactElement>
}

const sc =scopedClassMeak('jui-layout')

const Layout:React.FunctionComponent<LayoutProps> = (props) => {
    const {className,...rest}=props;
    const children = (props.children as Array<ReactElement>)
    const hasAside = 'length' in children&&
    children.reduce((result,node)=>result || node.type === Aside,false)
    return(
        <div className={sc({'':true,hasAside},{extra:className})} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout