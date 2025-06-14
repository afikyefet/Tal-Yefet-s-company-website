import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader'
import { Home } from './pages/Home'
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
            </Routes>
          </main>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
