import React, { useState, useRef } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import configureStore from './store/configureStore'
import { useOnClickOutside } from './hooks'
import Menu from './components/common/nav/Menu'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

const store = configureStore()

function Routes () {
  const [open, setOpen] = useState(true)
  const node = useRef()
  const menuId = 'main-menu'
  useOnClickOutside(node, () => setOpen(true))

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <div ref={node}>
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default Routes
