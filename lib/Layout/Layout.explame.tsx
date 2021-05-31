import React from 'react'
import Aside from './Aside'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Layout from './Layout'
import Example from '../example/example'
import './Layout.explame.scss'

export default function(){
    return(
        <>
            <Example title='第一个例子' description='经典布局'>
                <Layout style={{height:500, width:400}} className='333'>
                    <Header className={'x'}>header</Header>
                    <Content className={'y'}>content</Content>
                    <Footer className={'x'}>footer</Footer>
                </Layout>
            </Example>
            <Example title='第二个例子' description='经典布局'>
                <Layout style={{height:500, width:400}}>
                    <Header className={'x'}>header</Header>
                    <Layout>
                        <Aside className={'z'}>Aside</Aside>
                        <Content className={'y'}>content</Content>
                    </Layout>
                    <Footer className={'x'}>footer</Footer>
                </Layout>
            </Example>
            <Example title='第三个例子' description='经典布局'>
            <Layout style={{height:500, width:400}}>
                <Header className={'x'}>header</Header>
                <Layout>
                    <Content className={'y'}>content</Content>
                    <Aside className={'z'}>Aside</Aside>
                </Layout>
                <Footer className={'x'}>footer</Footer>
            </Layout>
            </Example>
            <Example title='第四个例子' description='经典布局'>
            <Layout style={{height:500, width:400}}>    
                <Aside className={'z'}>Aside</Aside> 
                <Layout>
                    <Header className={'x'}>header</Header>
                    <Content className={'y'}>content</Content>
                    <Footer className={'x'}>footer</Footer>
                </Layout> 
            </Layout>
            </Example>
        </>
    )
}