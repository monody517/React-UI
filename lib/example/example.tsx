import React from 'react'
import './example.scss'

interface Props{
    children:React.ReactNode
    title:string
    description:string
}

const example:React.FunctionComponent<Props> = (props) =>{
    return (
        <>
            <div className='example'>
                <div className='container'>
                    {props.children}
                </div>
                <div className='code-example-box'>
                    <div className='code-title'></div>
                    <div className='code-description'></div>
                </div>
            </div>
        </>
    )
}

export default example