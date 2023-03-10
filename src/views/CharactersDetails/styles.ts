import styled from "styled-components";

export const App = styled.div`
  text-align: center;
  background-color: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Container = styled.div`
  padding: 2em;
  gap: 24px;
`;
export const DeleteButton = styled.button`
  padding: 10px 20px;
  color: white;
  font-size: large;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
  margin-right: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const ButtonBack = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;