
import React, { useState } from 'react'
import Dialog from './dialog'
export default function(){
    const [x,setX] = useState(true)
    return(
        <>
            <button onClick={() => { setX(!x) } }>click</button>
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
        </>
    )

}
