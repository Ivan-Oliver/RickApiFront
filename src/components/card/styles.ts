import styled from "styled-components";
import{ Link } from "react-router-dom";

export const App = styled.div`
  text-align: center;
  background-color: black;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.grey100};
`

export const Description = styled.p`
margin: 0;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    font-family: sans-serif;
    padding: 20px;
   
`

export const Image = styled.img`
margin: 0;
border-radius: 300px;
width: 200px;
height: 200px;
&:hover {
 box-shadow: 5px 5px 5px 5px rgba(255, 255, 255, 0.2);
}
`

export const Container = styled.div`
 background-color: ${({ theme }) => theme.colors.bluerick};
  border: 1px solid black;
  padding: 35px;
  width: 13em;
  margin: 10px;
  border-radius: 15px;
  height: 27em;
  color: ${({ theme }) => theme.colors.grey100};
`
export const ButtonDetails = styled(Link)`
margin: 10px;
 display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-family: sans-serif;
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