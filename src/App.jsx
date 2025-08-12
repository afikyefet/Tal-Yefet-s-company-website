import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { Home } from './pages/Home'
import { AdminPanel } from './pages/AdminPanel'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Videos } from './pages/Videos'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { store } from './store/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <main className='main-layout'>
            <AppHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <AppFooter />
          </main>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
