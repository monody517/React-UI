import React from 'react';
import ReactDOM from 'react-dom'
import Icon from './icons/icon'
import Dialog from './dialog/dialog.explame'
import Layout from './Layout/Layout.explame'
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

    <Dialog></Dialog>
    <Layout></Layout>
</div>
    ,document.querySelector('#root'))

