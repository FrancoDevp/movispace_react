import React from 'react'
import Nav from './components/nav.js'
import Footer from './components/footer.js'
import Main from './components/main.js'
import ItemListContainer from './components/ItemListContainer.js'
import Header from './components/header.js'
import ItemCount from './components/ItemCount.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'

const App = () => {
  return <>
          <Header/>
          <Nav/>
          <Main participante="Franco"/>
          <ItemCount/>
          <ItemListContainer/>
          <ItemDetailContainer/>
          <Footer/>
        </>
}

export default App