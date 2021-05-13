import React from 'react'
import scopedClassMeak from '../helper/classMeak'

interface layoutProps{ 
    
}
const sc =scopedClassMeak('jui-layout')

const Content:React.FunctionComponent<layoutProps> = (props) => {
    return(
        <div className={sc('content')}>
            content
        </div>
    )
}

export default Content