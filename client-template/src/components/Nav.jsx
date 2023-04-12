import React from 'react'
import { Link} from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import styled from "styled-components"

const Nav = () => {
  return (
    <Container>
      <NavLink to='/'>Products</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
      <Cart>
        <FaShoppingCart  color="#333" size={25} />
        <span>(0)</span>
      </Cart>
    </Container>
  )
}

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Roboto;
  font-size: 22px;
  color: #333;
`

const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
`

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 80%;
  margin: 0 auto;
`

export default Nav