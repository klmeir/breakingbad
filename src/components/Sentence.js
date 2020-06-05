import React from 'react';
import styled from '@emotion/styled';

const ContainerSentence = styled.div`
  background-color: #fff;
  border-radius: .5rem;  
  max-width: 800px;
  padding: 3rem;

  @media(min-width: 992px) {
      margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;    
    padding-left: 4rem;
    position: relative;    
    text-align: center;

    &::before {
        color: black;
        content: open-quote;
        font-size: 1orem;  
        font-weight: bold;
        left: -1rem;      
        position: absolute;        
        top: -2rem;
    }
  }

  p {
    color: #666;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    margin-top: 2rem;
    text-align: right;
  }
`;

const Sentence = ({ sentence}) => {    
    return ( 
        <ContainerSentence>
            <h1>{sentence.quote}</h1>
            <p>{sentence.author}</p>
        </ContainerSentence>        
    );
}
 
export default Sentence;