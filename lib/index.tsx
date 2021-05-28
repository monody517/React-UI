import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import DialogDemo from './dialog/dialog.demo';
import IconDemo from './icons/icon.demo';
import LayoutDemo from './Layout/Layout.demo'
import ButtonDemo from './buttons/button.demo';
import example from './example/example'
import './index.scss'
import Icon from './icons/icon';


const logo = require('./logo/logo.png');
ReactDOM.render(
  <Router>
      <div className={'site-page'}>
      <div className={'site-header'}>
        <div className="logo">
          <img src={logo.default} alt="" width='48' height='48'></img>
          <span>J-React-UI</span>
          <Icon className={'github'} name='github'></Icon>
        </div>
      </div>
      <div className={'site-main'}>
        <div className={'site-aside'}>
          <h2>组件</h2>
          <ul>
          <li>
              <NavLink to="/button">按钮</NavLink>
          </li>
          <li>
              <NavLink to="/icon">图标</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局</NavLink>
            </li>
            <li>
              <NavLink to="/example">example</NavLink>
            </li>
          </ul>
        </div>
        <div className={'site-content'}>
          <Route path="/button" component={ButtonDemo}/>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/dialog" component={DialogDemo}/>
          <Route path="/layout" component={LayoutDemo}/>
          <Route path="/example" component={example}/>
        </div>
      </div>
      <div className={'site-footer'}>
      &copy; jwp
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));

