import React from 'react'
import Nav from './components/nav.js'
import Footer from './components/footer.js'
import Main from './components/main.js'
import ItemListContainer from './components/ItemListContainer.js'
import Header from './components/header.js'
import ItemCount from './components/ItemCount.js'

const App = () => {
  return <>
          <Header/>
          <Nav/>
          <itemListContainer/>
          <Main participante={1,2,3}/>
          <ItemCount/>
          <Footer/>
          <ItemListContainer/>
        </>
}

export default App