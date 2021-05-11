import React from 'react';
import ReactDOM from 'react-dom'
import Icon from './icon'

const fn= () => {
    console.log('1')
}

ReactDOM.render(<Icon onClick={fn} name="pay"></Icon>,document.querySelector('#root'))

