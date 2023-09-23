// import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='register' element={<SignUp />} />
    </>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
