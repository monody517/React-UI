import React from 'react'
import Affix from './Affix'
import Example from '../example/example'

export default function() {
    return (
        <>
            <Example title='固钉' description='固定位置的钉'>
                <Affix distance = {1}>Affix</Affix>
            </Example>
        </>
    )
}