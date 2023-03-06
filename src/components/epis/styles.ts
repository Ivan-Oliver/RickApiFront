import styled from "styled-components";

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
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
    font-family: sans-serif;
    margin-bottom: 10px;
    margin-right: 100px
`

export const Contaner = styled.div`
 background-color: ${({ theme }) => theme.colors.grey1000};
  border: 1px solid black;
  padding: 35px;
  width: 10em;
  margin: 10px;
  border-radius: 20px;
  height: 16em;
  color: ${({ theme }) => theme.colors.grey100};
`


