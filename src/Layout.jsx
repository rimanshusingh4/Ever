import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';

function Layout() {

  // const persistor = persistStore(store);

  return (
    <div className='flex flex-wrap justify-center mt-8'>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </PersistGate>
       
      </Provider>
   
    </div>
  )
}

export default Layout