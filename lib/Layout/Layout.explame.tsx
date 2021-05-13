import React from 'react'
import Aside from './Aside'
import Content from './Content'
import Footer from './footer'
import Header from './Header'
import Layout from './Layout'
import './Layout.explame.scss'

export default function(){
    return(
        <>
            <h1>第一个例子</h1>
            <Layout style={{height:400}} className='333'>
                <Header className={'x'}>header</Header>
                <Content className={'y'}>content</Content>
                <Footer className={'x'}>footer</Footer>
            </Layout>
            <h1>第二个例子</h1>
            <Layout style={{height:500}} className='333'>
                <Header className={'x'}>header</Header>
                <Layout>
                    <Aside className={'z'}>Aside</Aside>
                    <Content className={'y'}>content</Content>
                </Layout>
                <Footer className={'x'}>footer</Footer>
            </Layout>
            <h1>第三个例子</h1>
            <Layout style={{height:500}} className='333'>
                <Header className={'x'}>header</Header>
                <Layout>
                    <Content className={'y'}>content</Content>
                    <Aside className={'z'}>Aside</Aside>
                </Layout>
                <Footer className={'x'}>footer</Footer>
            </Layout>
            <h1>第四个例子</h1>
            <Layout style={{height:500}} className='333'>    
                <Aside className={'z'}>Aside</Aside> 
                <Layout>
                    <Header className={'x'}>header</Header>
                    <Content className={'y'}>content</Content>
                    <Footer className={'x'}>footer</Footer>
                </Layout> 
            </Layout>
        </>
    )
}