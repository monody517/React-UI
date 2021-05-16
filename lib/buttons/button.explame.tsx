import React from 'react'
import Button from './button'
import './button.explame.scss'

export default function(){
    return(
        <>
            <div className={'button-explame'}>
                <Button></Button>
                <Button type="primary"></Button>
                <Button type="Dashed"></Button>
                <Button type="Danger"></Button>
            </div>
        </>
    )
}