import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Aside from './Layout/Aside';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Layout from './Layout/Layout';
import LayoutExample from './Layout/Layout.explame';
import './index.scss'
import DialogDemo from './dialog/dialog.demo';
const logo = require('./logo/logo.png')
console.log(logo);



ReactDOM.render(
  <Router>
    <Layout className='site-page'>
      <Header className='site-header'>
        <div className="logo">
          <img src={logo.default} alt="" width="58"/>
          JUI
        </div>
      </Header>
      <Layout>
        <Aside className='site-aside' style={{border : '1px solid green'}}>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
          </ul>
        </Aside>
        <Content className='site-content'>
          <Route path="/dialog" component={DialogDemo}></Route>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className='site-footer'>
          版权信息
        </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));

