import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Routes , Route} from 'react-router-dom'
import Add from './page/Add/Add'
import List from './page/List/List'
import Order from './page/Order/Order'

// import{ToastC}
  // import { ToastContainer } from 'react-toastify';
  // import 'react-toastify/dist/ReactToastify.css';
  
function App() {
  const url = "http://localhost:4000"
  return (
    <div>
      {/* <ToastContainer /> */}
      <Navbar /> 
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes >
          <Route path='/add' element={<Add  url={url}/>  }></Route>
          <Route path='/list' element={<List  url={url}/>  }></Route>
          <Route path='/order' element={<Order  url={url}/>  }></Route>
        </Routes>
        </div>
    </div>
  )
}

export default App