import React from 'react'

interface DemoProps{
    code:string
}

const demo:React.FunctionComponent<DemoProps> = (props) => {
    return(
        <div>
            {props.children}
            <pre>
                {props.code}
            </pre>
        </div>
        
    )
}

export default demo