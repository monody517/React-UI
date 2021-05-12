
import React, { useState } from 'react'
import Dialog from './dialog'
export default function(){
    const [x,setX] = useState(false)
    return(
        <>
            <button onClick={() => { setX(!x) } }>click</button>
            <Dialog visible={x} buttons={
                [
                    <button onClick={()=>console.log("1")
                    }>1</button>,
                    <button onClick={()=>console.log("2")
                    }>2</button>
                ]
            } onClose={()=>{setX(!x)}} isMask={false}>
                <div>hi</div>
            </Dialog>
        </>
    )

}
