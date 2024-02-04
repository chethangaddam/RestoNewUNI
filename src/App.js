import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom/cjs/react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Login from './pages/login/Login'
import Header from './components/head/Header'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" />
        <Route path="/" exact render={() => <Home />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </Router>
  )
}

export default App
