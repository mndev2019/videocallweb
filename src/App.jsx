


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './Pages/About';
import Termscondition from './Pages/Termscondition';
import Privacypolicy from './Pages/Privacypolicy';
import Contact from './Pages/Contact';
import Eula from './Pages/Eula';


function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/terms-condition' element={<Termscondition />} />
          <Route path='/privacy-policy' element={<Privacypolicy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/eula' element={<Eula/>}/>
        </Route>


      </>


    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />

    </>
  )
}

export default App

