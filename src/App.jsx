import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Missions from './pages/Missions'
import Path from './pages/Path'
import Accomplishments from './pages/Accomplishments'
import Contacts from './pages/Contacts'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="missions" element={<Missions />} />
        <Route path="path" element={<Path />} />
        <Route path="accomplishments" element={<Accomplishments />} />
        <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}


