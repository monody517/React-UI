import React from 'react';
import ReactDOM from 'react-dom'
import Icon from './icon'

const fn:React.MouseEventHandler= (e) => {
    console.log(e.target)
}

ReactDOM.render(<Icon 
    onClick={fn} 
    onMouseEnter={()=>console.log('enter')}
    onMouseLeave={()=>console.log('leave')}
    name=""></Icon>,document.querySelector('#root'))

