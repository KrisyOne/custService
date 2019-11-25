import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'
import './index.css';
import './assets/font/iconfont.css'
import App from './App';
import Etc from './custService/Etc';
// import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      < Switch>
        <Route path={`/etc`} component={Etc}></Route>

        <Route path={`/`} component={App}></Route>
      </Switch>
    </BrowserRouter>
  )

}

ReactDOM.render(<Root/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
