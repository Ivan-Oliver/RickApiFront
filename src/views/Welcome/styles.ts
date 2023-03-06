import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CharacterImg from '../Welcome/assets/rickfondo.jpg'


export const WelcomeContainer = styled.div`
  background-image: url(${CharacterImg});
background-repeat: no-repeat;
background-size: cover;
background-position: 100% 100%;
width: 100vw;
height:100vh;
align-items: center;
display: flex;
justify-content: center;
`
export const ButtonBoxes = styled.div`
    position: absolute;
    top: 40vh;
    flex-direction:column;
    margin-left: 90px;
    display: flex;
`

export const WelcomeSignup = styled(Link)`
 display: flex;
 font-family: Arial, Helvetica, sans-serif;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: cover;
max-width: 100%;
max-height: 100%;
width: 400px;
height: 100px;
border-radius: 20px;
margin-bottom: 2rem;
cursor: pointer;
 position: relative;
    border: none;
    font-size: 24px;
    color:${({ theme }) => theme.colors.white100};
    font-weight: bold;
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    &:hover{
      background-image: url(${CharacterImg});
      color:${({ theme }) => theme.colors.black100};
      box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
        font-size: 40px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
  transform: translateY(4px);
    }
    
    }  
`
export const WelcomeLogin = styled(Link)`
 font-family: Arial, Helvetica, sans-serif;
 position: relative;
 display: flex;
justify-content: center;
align-items: center;
background-repeat: no-repeat;
background-size: cover;
max-width: 100%;
max-height: 100%;
width: 400px;
height: 100px;
border-radius: 20px;
margin-bottom: 2rem;
cursor: pointer;
 position: relative;
    border: none;
    font-size: 24px;
    color:${({ theme }) => theme.colors.white100};
    font-weight: bold;
    margin: 20px;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    &:hover{
      background-image: url(${CharacterImg});
        color:${({ theme }) => theme.colors.white100};
        box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
        font-size: 40px;
       font-weight: bold;
       padding: 20px;
       text-align: center;
       -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    &:active{
  transform: translateY(4px);
    }
    
    }  
`


