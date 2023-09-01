import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Test from './components/Test.jsx'
import Test2 from './components/Test2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Test></Test>
    {/* <Test2></Test2> */}
  </React.StrictMode>,
)
