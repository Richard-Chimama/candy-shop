import React from 'react'
import { Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Products</Link>
      <Link to='/admin'>Admin</Link>
      <Link to='/checkout'>Checkout</Link>
    </nav>
  )
}

export default Nav