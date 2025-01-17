import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
let routes=createBrowserRouter(Routes)

function App() {

  return (
    <>
    <RouterProvider router={routes}/>  
    </>
  )
}

export default App
