import { Routes, Route } from 'react-router-dom'
import './App.css'

import { Navbar } from './components/Navbar/Navbar';

import { Home } from './pages/Home/Home'
import { Helpdesk } from './pages/Helpdesk/Helpdesk';
import { Voip } from './pages/Voip/Voip';
import { Financeiro } from './pages/Financeiro/Financeiro';
import { Contrato } from './pages/Contrato/Contrato';
import { Settings } from './pages/Settings/Settings';
import { Logout } from './pages/Logout/Logout';
import { NotFound } from './pages/NotFound/NotFound';
import { BoasVindas } from './components/BoasVindas/BoasVindas';

function App() {

  return (
    <div className="container">
      <div className="container-left">
        <BoasVindas />
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/helpdesk' element={<Helpdesk />} />
            <Route path='/voip' element={<Voip />} />
            <Route path='/financeiro' element={<Financeiro />} />
            <Route path='/detalhamento' element={<Home />} />
            <Route path='/contrato' element={<Contrato />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <div className="container-right">
        
        <h1>Teste</h1>
      </div>

    </div>
  )
}

export default App
