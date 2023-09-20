// import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Contact from './pages/Contact'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
