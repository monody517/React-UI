import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import DialogExample from './dialog/dialog.explame';
import LayoutExample from './Layout/Layout.explame';


ReactDOM.render(
  <Router>
    <div>
      <header>
        <div className="logo">
          JUI
        </div>

      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </main>
      </div>
    </div>
  </Router>
  , document.querySelector('#root'));

