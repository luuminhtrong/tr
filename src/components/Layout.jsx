import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import ProductViewModal from './ProductViewModal'

import Header from './Header'
import Footer from './Footer'

import Routes from '../routes'

const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={props => (
        <div>
          <Header {...props} />
          <div className='container'>
            <div className='main'>
              <Routes />
            </div>
          </div>
          <Footer/>

          <ProductViewModal />
        </div>
      )} />
    </BrowserRouter>
  )
}

export default Layout
