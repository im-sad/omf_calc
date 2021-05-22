import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from "./_styles"
import Layout from 'components/Layout'

import 'assets/styles/fonts.scss'
import 'assets/styles/reset.scss'
import 'react-responsive-modal/styles.css'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
