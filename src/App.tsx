
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Practices from './pages/Practices'
import About from './pages/About'
import Main from './pages/Main'
import Contact from './pages/Contact'


function App() {


  return (

    <Routes>

      <Route path='/' element={ <Main /> } >

        <Route index path='/' element={ <Home /> } />

        <Route path='/about' element={ <About /> } />

        <Route path='/areasofpractice' element={ <Practices /> } />

        <Route path='/contact' element={ <Contact /> } />

      </Route>
      
    </Routes>

  )
}

export default App
