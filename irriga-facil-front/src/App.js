import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/home"
import Layout from "./components/layout"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='login' element={<Home />} />
            <Route path='cadastro' element={<Home />} />
            <Route path='propriedades' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
