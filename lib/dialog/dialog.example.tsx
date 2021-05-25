import React, { useState } from 'react'
import Dialog, {alert, confirm, model} from './dialog'
import Button from '../buttons/buttons'
import './dialog.example.scss';

export default function(){
    const [x,setX] = useState(false)
    const onModel = ()=>{
        const close = model(<h1>nihao
            <button onClick={()=>{close()}}>close</button>
        </h1>)
    }
    return(
        <div className="dialogs">
            <Dialog 
            visible={x} 
            buttons={
                [
                    <div onClick={()=>console.log("1")
                    }>areft</div>,
                    <div onClick={()=>console.log("2")
                    }>disarrge</div>
                ]
            } 
            onClose={()=>{setX(!x)}} isMask={false}>
                <div>hihihihihihihihihi</div>
            </Dialog>
            <Button
             type='default'
             click={()=>{setX(!x)}}>click</Button> 
            <Button 
            type='default'
            click={()=>alert('1')}>alert</Button>
            <Button 
            type='default'
            click={()=>confirm('1',()=>{console.log('yes')
            },()=>{console.log('no');})}>confirm</Button>
            <Button 
            type='default'
            click={onModel}>model</Button>
        </div>
    )
}
