import React from "react"

interface dialogProps{
    visible:boolean
}

const dialog:React.FunctionComponent<dialogProps> = (props)=>{
    return(
        props.visible?
        <div>diglog</div> : null
    )
}

export default dialog