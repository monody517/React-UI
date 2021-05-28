import React from 'react'
import Button from './buttons'
import './button.example.scss'

export default function(){
    return(
        <>
            <div className={'button-example'}>
                    <Button type='default'>default</Button>
                    <Button type="primary">primary</Button>
                    <Button type="Dashed">Dashed</Button>
                    <Button type="Danger">Danger</Button>
            </div>
            <div className='icon-button-example'>
                <Button type='icon'>
                    <span>icon</span>
                    <svg className='iconfont'>
                        <use xlinkHref='#setting' ></use>
                    </svg>         
                </Button>
            </div>
        </>
    )
}