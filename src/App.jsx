import { Route, Routes } from 'react-router-dom'
import "./css/fonts.css"
import './App.css'
import Home from './pages/Home'
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { languageContext } from './components/common/languageContext'
import { french } from './data/language'

function App() {
  const [language, setLanguage ] = useState({
        id: localStorage.getItem("langID") ? JSON.parse(localStorage.getItem("langID")) : "FR",
        data: localStorage.getItem("language") ? JSON.parse(localStorage.getItem("language")) : french,
        //data: french
  });

  return (
    <languageContext.Provider value={[language, setLanguage]}>
              <Routes>
                      <Route path='/' element={<Home />} />
              </Routes>
    </languageContext.Provider>
  )
}

export default App
