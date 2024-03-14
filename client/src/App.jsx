import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { AuthProvider } from "./context/AuthContext.jsx"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<h1>Home Page</h1>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/register' element={<RegisterPage/>}/>
       <Route path='/tasks' element={<h1>Tasks page</h1>}/>
       <Route path='/add-task' element={<h1>New task</h1>}/>
       <Route path='/task/:id' element={<h1>update task</h1>}/>
       <Route path='/profile' element={<h1>profile</h1>}/>

      </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
  
}
export default App