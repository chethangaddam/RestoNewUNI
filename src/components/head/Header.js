import './head.css'
import {useHistory} from 'react-router-dom/cjs/react-router-dom'
import {useApiDataContext} from '../../states/ApiData'
import {useCartContext} from '../../states/CartContext'

function Header() {
  const apiData = useApiDataContext() // Replace with your actual API data
  const {cartList} = useCartContext() // Replace with your actual cart data
  const history = useHistory()
  return (
    <nav className="navbar">
      <div style={{cursor: 'pointer'}}>
        <button
          type="button"
          className="resturantName"
          onClick={() => {
            history.push('/')
          }}
          style={{border: 'none', background: 'white'}}
        >
          {' '}
          <h2>{apiData && apiData[0]?.restaurant_name}</h2>
        </button>
      </div>
      <div style={{cursor: 'pointer'}}>
        <button
          type="button"
          className="myorder"
          onClick={() => {
            history.push('/cart')
          }}
          style={{border: 'none', background: 'white'}}
        >
          <div className="order">
            <p>My Orders</p>
          </div>

          <div className="cartIcon">
            <span className="itemnumber">{cartList && cartList.length}</span>
            cart
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Header
