import React, { FC } from 'react'
import {
  ButtonBoxes,
  WelcomeSignup,
  WelcomeLogin,
  WelcomeContainer,
} from './styles'

const Welcome: FC = () => {

  return (
    <WelcomeContainer>
      <ButtonBoxes>
        <WelcomeLogin to="/login">Login</WelcomeLogin>
        <WelcomeSignup to="/signup">Signup</WelcomeSignup>
      </ButtonBoxes>
    </WelcomeContainer>
  )
}

export default Welcome
