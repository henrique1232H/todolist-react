import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/index.jsx'
import Global from './style/global.js'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
