import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
import { About } from './pages/About'
import { AdminPanel } from './pages/AdminPanel'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppHeader />
          {/* <Hero /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <AppFooter />
        </div>
      </Router>
    </Provider>
  )
}

export default App
