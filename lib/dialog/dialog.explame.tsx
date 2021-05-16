import React, { useState } from 'react'
import Dialog, {alert, confirm, model} from './dialog'
import Button from '../buttons/button'

export default function(){
    const [x,setX] = useState(false)
    const onModel = ()=>{
        const close = model(<h1>nihao
            <button onClick={()=>{close()}}>close</button>
        </h1>)
    }
    return(
        <>
            {/* <Button onClick={() => { return setX(!x) } }>click</Button> */}
            <Button>click</Button>
            <Dialog visible={x} buttons={
                [
                    <div onClick={()=>console.log("1")
                    }>arreft</div>,
                    <div onClick={()=>console.log("2")
                    }>disarrge</div>
                ]
            } onClose={()=>{setX(!x)}} isMask={false}>
                <div>hihihihihihihihihi</div>
            </Dialog>
            
            <button onClick={()=>alert('1')}>alert</button>
            <button onClick={()=>confirm('1',()=>{console.log('yes')
            },()=>{console.log('no');})}>confirm</button>
            <button onClick={onModel}>model</button>
        </>
    )
}
