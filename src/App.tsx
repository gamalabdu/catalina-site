
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Practices from './pages/Practices'
import About from './pages/About'
import Main from './pages/Main'


function App() {


  return (

    <Routes>

      <Route path='/' element={ <Main /> } >

        <Route index path='/home' element={ <Home /> } />

        <Route index path='/about' element={ <About /> } />

        <Route index path='/areasofpractice' element={ <Practices /> } />

      </Route>
      
    </Routes>

  )
}

export default App
