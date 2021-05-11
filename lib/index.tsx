import React from 'react';
import ReactDOM from 'react-dom'
import Icon from './icons/icon'
import Dialog from './dialog/dialog.explame'

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

    <Dialog></Dialog>
</div>
    ,document.querySelector('#root'))

