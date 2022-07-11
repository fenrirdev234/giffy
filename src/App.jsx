/* import { useState } from 'react' */
import './App.css'
import Home from './pages/Home'
import Detail from './pages/Detail/index'

import { GifsContextProvider } from './context/GifsContext'
import SearchResults from './pages/SearchResults/SearchResults';
import StaticContext from './context/StaticContext';
import { Link, Route } from "wouter";


function App() {
  return (
    <StaticContext.Provider value={{
      name: 'wololo',
      suscribete: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src='/logo.png' />
            </figure>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword" />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>

  )
}

export default App
