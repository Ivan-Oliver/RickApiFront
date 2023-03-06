import React, { FC, useCallback } from 'react'
import {
  ButtonBoxes,
  ButtonCharacters,
  ButtonEpisodes,
  ButtonLocations,
  WelcomeContainer,
} from './styles'

const Categories: FC = () => {

  return (
    <WelcomeContainer>
      <ButtonBoxes>
        <ButtonCharacters to="/characters">Characters</ButtonCharacters>
        <ButtonEpisodes to="/episodes">Episodes</ButtonEpisodes>
        <ButtonLocations to="/locations">Locations</ButtonLocations>
      </ButtonBoxes>
    </WelcomeContainer>
  )
}

export default Categories
