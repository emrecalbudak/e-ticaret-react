import React, { useState } from 'react'
import { MenuMenu, MenuItem, Menu, Container } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navi() {
  const {cartItems} = useSelector(state=>state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  function handleSingOut() {
    setIsAuthenticated(false)
    navigate('/')
    
  }
  function handleSingIn() {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <MenuItem name='home' />
          <MenuItem name='messages' />
          <MenuMenu position='right'>
          {cartItems.length > 0 && <CartSummary />} 
            {isAuthenticated?<SignedIn signOut={handleSingOut}/> : <SignedOut  signIn={handleSingIn} />} 
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  )
}
