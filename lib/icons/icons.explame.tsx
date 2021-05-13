import React from 'react';
import ReactDOM from 'react-dom'
import Icon from './icon'
import './index.scss'

const fn:React.MouseEventHandler= (e) => {
    console.log(e.target)
}

ReactDOM.render(
<div>
    <div>
        <Icon 
        onClick={fn} 
        onMouseEnter={()=>console.log('enter')}
        onMouseLeave={()=>console.log('leave')}
        name="pay"></Icon>
    </div>
</div>
    ,document.querySelector('#root'))
