// import React from 'react'

import Nav from './components/nav.js'
import Footer from './components/footer.js'
import Main from './components/main.js'
import ItemListContainer from './components/ItemListContainer.js'
import Header from './components/header.js'

const App = () => {
  return <>
          <Header/>
          <Nav/>
          <itemListContainer/>
          <Main participante={1,2,3}/>
          <Footer/>
          <ItemListContainer/>
        </>
  
}

export default App