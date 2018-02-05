import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'
import { ROUTER_MAP } from './router/routerMap.js'

class App extends Component {
  render () {
    return (
      <div className="App">
        {
          ROUTER_MAP.ROUTE.map((item, idx) => {
            return <Route key={idx} exact path={item.path} component={item.component}/>
          })
        }
        <div className='foots'>
            {
                ROUTER_MAP.NAV.map((item,idx) => {
                    return <NavLink key={idx} to={item.to}>{item.text}</NavLink>
                })
            }
        </div>
      </div>
    );
  }
}

export default App;
