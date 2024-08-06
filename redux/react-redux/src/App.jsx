import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CakeContainer from './CakeContainer'
import store from './redux/store/configureStore'
import cakeSice from './redux/cake/cakeSlice'
import iceCreamSlice from './redux/iceCream/iceCream'

function App() {
  
  console.log(store.getState());
  const unsubcribe = store.subscribe(()=>{
    console.log(store.getState())
  })
  store.dispatch(cakeSice.actions.ordered())
  store.dispatch(cakeSice.actions.ordered())
  store.dispatch(cakeSice.actions.restocked(1))//payload
  // store.dispatch(iceCreamSlice.actions.ordered())
  // store.dispatch(iceCreamSlice.actions.restocked(1))
  unsubcribe()


  return (
    <>
      <CakeContainer/>
    </>
  )
}

export default App
