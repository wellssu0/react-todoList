import React, { memo } from 'react'
import { Provider } from 'react-redux'


import store from './store'
import Home from './containers/Home'

export default memo(() => {
  return(
    <Provider store={store}>
      <Home />
    </Provider>
  )
})