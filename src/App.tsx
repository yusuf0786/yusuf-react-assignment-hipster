import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import "./App.css"
import "../styles/globals.css"

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <div className="page-container">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
