import { Main } from "./components/Main"
import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, LoginPage, ServicesPage, ProductsPages } from './components/ToDoPages'
import { NavBar } from "./components/NavBar"

function App() {

  return (
    <>
      <header>
        <p>Práctica ToDoList</p>
      </header>

      <NavBar />

      <main>

        {/* <Main /> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='services' element={<ServicesPage />} />
          <Route path='products' element={<ProductsPages />} />
          <Route path='login' element={<LoginPage />} />

          {/* <Route path='/*' element={<LoginPage />} /> */}
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>

      </main>

      <footer>
        <p>Práctica ToDoList</p>
      </footer>
    </>
  )
}

export default App
