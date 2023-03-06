import styled from "styled-components";

export const App = styled.div`
 text-align: center;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${({ theme }) => theme.colors.black};
`

export const Container = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

`

export const Options = styled.div``

export const InputSearch = styled.input`
text-decoration: transparent;
font-size: 14px;
font-weight: lighter;
`

export const ButtonNext = styled.button`
align-items: center;
	border-radius: 100px;
	border: none;
    background-color: ${({ theme }) => theme.colors.bluerick};
	color: black;
	cursor: pointer;
	display: flex;
	height: 50px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	justify-content: center;
	text-align: center;
	transition: .3s ease all;
	width: 200px;
    &:hover{
    background: blue;
	color: #fff;
	font-size: 20px;    }
    `



export const ButtonPrevious = styled.button`
align-items: center;
	border-radius: 100px;
	border: none;
    background-color: ${({ theme }) => theme.colors.bluerick};
	color: black;
	cursor: pointer;
	display: flex;
	height: 50px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	justify-content: center;
	text-align: center;
	transition: .3s ease all;
	width: 200px;
    &:hover{
    background: blue;
	color: #fff;
	font-size: 20px;    }
    `
	export const DivSearch = styled.div`
	`


export const ButtonSearch = styled.button`
	border: none;
	background-color: white;
	font-size: 15px;
	color: black;
	cursor: pointer;
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	transition: .3s ease all;
	margin-top: 10px;
    
`

export const ButtonRemove = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;	
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: blue;
  border: none;
  border-radius: 15px;
  box-shadow: 0 2px #999;
  &:hover{
	background-color: blue;
  }
  &:active{
	background-color: blue;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  }
`

export const ImagenLogo = styled.img`
`
export const ButtonCreate = styled.button`
margin: 10px;
 display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;	
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: blue;
  border: none;
  border-radius: 15px;
  box-shadow: 0 2px #999;
  &:hover{
	background-color: blue;
  }
  &:active{
	background-color: blue;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  }
`