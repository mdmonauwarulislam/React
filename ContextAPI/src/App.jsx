import Login from './component/Login'
import ContextProvider from './context/ContextProvider'
import Profile from './component/Profile'

function App() {
  return (
    <ContextProvider>
      <Login/>
      <Profile/>
    </ContextProvider>
  )
}

export default App
