import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './assets/font/font_3514904_dazjw2di2au/iconfont.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/reset.css'
import store from './store'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  
)
