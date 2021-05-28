import React from 'react'
import Button from './buttons'
import Example from '../example/example'
import './button.example.scss'

export default function(){
    return(
        <>
        <Example title='按钮' description='按钮有四种类型：默认按钮、主要按钮、虚线按钮和危险按钮。'>
            <Button type='default'>default</Button>
            <Button type="primary">primary</Button>
            <Button type="Dashed">Dashed</Button>
            <Button type="Danger">Danger</Button>
        </Example>

        <Example title='图标按钮' description='该按钮中可以放入图标'>
            <Button type='icon'>
                <span>icon</span>
                <svg className='iconfont'>
                    <use xlinkHref='#setting' ></use>
                </svg>         
            </Button>
        </Example>
        </>
    )
}