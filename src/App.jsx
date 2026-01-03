import React from 'react'
import Moviecard from './components/moviecard'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'
import './css/App.css'
import { MovieProvider } from './context/MovieContext'



const App = () => {
  return (
<MovieProvider>
    <NavBar/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/favorites' element={<Favorites/>} />
          </Routes>
        </main>
</MovieProvider>  )
}

export default App