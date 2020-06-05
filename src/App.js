import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Sentence from './components/Sentence';

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
  transition: background-size .8s ease;

  :hover {
    cursor:pointer;
    background-size: 440px;
  }
`;

function App() {

  const [sentence, setSentence] = useState({});

  const getDataAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const sentence = await api.json();
    setSentence(sentence[0]);
  }

  useEffect( () => {
    getDataAPI();
  }, []);

  return (
    <Container>
      <Sentence
          sentence={sentence}       
      />

      <Button
        onClick={getDataAPI}
      >
        Obtener Frase
      </Button>
    </Container>    
  )
}

export default App;
