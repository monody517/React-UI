import React from 'react';
import Icon from './icon'

export default function(){
    const fn:React.MouseEventHandler= (e) => {
        console.log(e.target)
    }
    return(
        <div>
            <div>
                <Icon 
                onClick={fn} 
                onMouseEnter={()=>console.log('enter')}
                onMouseLeave={()=>console.log('leave')}
                name="pay"></Icon>
            </div>
        </div>
    )
}
