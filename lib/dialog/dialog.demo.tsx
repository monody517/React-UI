import Demo from '../Demo'
import React from 'react'
import DialogExplame from './dialog.explame'

const code = require('!!raw-loader!./dialog.explame.tsx')

const DialogDemo = ()=> {
    return(
        <Demo code={code.default}>
            <DialogExplame></DialogExplame>
        </Demo>
    )
}

export default DialogDemo