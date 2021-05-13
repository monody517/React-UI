import React from 'react'
import scopedClassMeak from '../helper/classMeak'

interface asideProps{ 
    
}
const sc =scopedClassMeak('jui-layout')

const Aside:React.FunctionComponent<asideProps> = (props) => {
    return(
        <div className={sc('aside')}>aside</div>
    )
}

export default Aside