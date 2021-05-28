import React from 'react';
import Icon from './icon'
import Example from '../example/example'

export default function(){
    const fn:React.MouseEventHandler= (e) => {
        console.log(e.target)
    }
    return(
            <Example title='图标' description='图标显示，支持各种事件'>
                <Icon 
                onClick={fn} 
                onMouseEnter={()=>console.log('enter')}
                onMouseLeave={()=>console.log('leave')}
                name="pay"></Icon>
            </Example>
    )
}
