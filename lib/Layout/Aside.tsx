import React, { HTMLAttributes } from 'react'
import scopedClassMeak from '../helper/classMeak'

interface asideProps extends HTMLAttributes<HTMLElement>{ 
    
}
const sc =scopedClassMeak('jui-layout')

const Aside:React.FunctionComponent<asideProps> = (props) => {
    const {className,...rest}=props
    return(
        <div className={sc('aside',{extra:className})} {...rest}>{props.children}</div>
    )
}

export default Aside