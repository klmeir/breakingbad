import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  align-items: center;
  display: flex;  
  flex-direction: column;
  padding-top: 5rem;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35, #0f574e 100%);
  background-size: 300px;
  border: 2px solid black;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  margin-top: 3rem;
  padding: 1rem 3rem;
`;

function App() {

  const getDataAPI = () => {
    console.log("consultando...");
  }

  return (
    <Container>
      <Button
        onClick={getDataAPI}
      >
        Obtener Frase
      </Button>
    </Container>    
  )
}

export default App;
