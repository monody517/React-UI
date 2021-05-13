import React from 'react'
import Content from './Content'
import Footer from './footer'
import Header from './Header'
import Layout from './Layout'

export default function(){
    return(
        <>
            <div>x</div>
            
            <Layout style={{height:500}} className='333'>
                <Header>header</Header>
                <Content>content</Content>
                <Footer>footer</Footer>
            </Layout>
        </>
    )
}