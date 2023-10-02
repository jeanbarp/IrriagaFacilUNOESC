import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./routes/home"
import Layout from "./components/layout"
import LoginRoute from "./routes/login"
import CadastroPropriedadeRoute from "./routes/cadastro-propriedade"
import CadastroRoute from "./routes/cadastro"
import PropreiedadesRoute from "./routes/propriedades"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='login' element={<LoginRoute />} />
            <Route path='cadastro' element={<CadastroRoute />} />
            <Route path='propriedades' element={<PropreiedadesRoute />} />
            <Route path='cadastro-propriedade' element={<CadastroPropriedadeRoute />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
