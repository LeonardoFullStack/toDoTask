import { UserProvider } from './contexts/UserProvider'
import { Router } from './routers/Router';

function App() {

  return (
    <>
      <header>
        <p>Práctica ToDoList</p>
      </header>

      <UserProvider>

        <main>

          <Router />

        </main>
      </UserProvider>

      <footer>
        <p>Práctica ToDoList</p>
      </footer>
    </>
  )
}

export default App
