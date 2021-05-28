import Icon from '../icons/icon'
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
                    <div className='code-title'>{props.title}</div>
                    <div className='code-description'>
                        {props.description}
                        <span><Icon name='show'></Icon></span>
                        </div>
                </div>
            </div>
        </>
    )
}

export default example