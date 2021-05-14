import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import DialogDemo from './dialog/dialog.demo';
import IconDemo from './icons/icon.demo';
import LayoutDemo from './Layout/Layout.demo'
import './index.scss'
import Layout from './Layout/Layout';
import Header from './Layout/Header';
import Aside from './Layout/Aside';
import Content from './Layout/Content';
import Footer from './Layout/Footer';


const logo = require('./logo/logo.png');
ReactDOM.render(
  <Router>
      <Layout className={'site-page'}>
      <Header className={'site-header'}>
        <div className="logo">
          <img src={logo.default} alt="" width='48' height='48'></img>
          JUI
        </div>
      </Header>
      <Layout>
        <Aside className={'site-aside'}>
          <h2>组件</h2>
          <ul>
          <li>
              <Link to="/icon">图标</Link>
            </li>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
          </ul>
        </Aside>
        <Content className={'site-content'}>
        <Route path="/icon" component={IconDemo}/>
          <Route path="/dialog" component={DialogDemo}/>
          <Route path="/layout" component={LayoutDemo}/> 
        </Content>
      </Layout>
      <Footer className={'site-footer'}>
        banquan
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));

