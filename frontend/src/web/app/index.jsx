import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'

import routes                     from './components/Routes'
import { Router, browserHistory } from 'react-router'

const createBrowserHistory = require('history/lib/createBrowserHistory');

import injectTapEventPlugin from 'react-tap-event-plugin';
import { syncHistoryWithStore } from 'react-router-redux'


injectTapEventPlugin();



const history = syncHistoryWithStore(browserHistory, store)

render(
   
   <Provider store={store}>
      <Router history={history} routes={routes} />
   </Provider>,
   document.getElementById('app')
)
