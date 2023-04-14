import React from 'react'
import Nav from './Nav'
import styled from 'styled-components';

const Container = styled.header `
  display: grid;
  grid-template-columns: minmax(30px, 1fr) [inner-start] minmax(0, 70rem) [inner-end] minmax(30px, 1fr);
  height: 96px;
  background-color: black;
  position: fixed; 
  left: 0;
  top: 0; 
  width: 100%;
  z-index: 0; 
`;
  
const ContainerInner = styled.div `
  grid-column: inner;
`;


const Header = () => {
  return (
    <Container>
      <ContainerInner>
        <Nav />
      </ContainerInner>
    </Container>

  )
}

export default Header