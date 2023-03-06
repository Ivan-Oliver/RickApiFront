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
export const ButtonNext = styled.button`
align-items: center;
	border-radius: 100px;
	border: none;
	background: #241744;
	color: #fff;
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
	color: black;
	font-size: 20px;    }
    `



export const ButtonPrevious = styled.button`
align-items: center;
	border-radius: 100px;
	border: none;
	background: #241744;
	color: #fff;
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
	color: black;
	font-size: 20px;    }
    `