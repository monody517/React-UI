import React from 'react'
import scopedClassMeak from '../helper/classMeak'

interface headerProps{ 
    
}
const sc =scopedClassMeak('jui-layout')

const Header:React.FunctionComponent<headerProps> = (props) => {
    return(
        <div className={sc('header')}>
            header
        </div>
    )
}

export default Header