import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from "./store";
import SelectedLessons from './components/selectedLessons'

import './style/styles.scss'


render(
  <Provider store={store}>
    <SelectedLessons />
  </Provider>,
  document.getElementById('root')
)
