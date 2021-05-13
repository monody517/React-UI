import scopedClassMeak from '../helper/classMeak'
import React from 'react'

interface footerProps{ 
    
}
const sc =scopedClassMeak('jui-layout')

const Footer:React.FunctionComponent<footerProps> = (props) => {
    return(
        <div className={sc('footer')}>
            footer
        </div>
    )
}

export default Footer