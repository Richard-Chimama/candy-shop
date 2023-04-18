import React from 'react'
import Nav from './Nav'
import styled from 'styled-components';
import Colors from '../Theme';
import ShowRoute from './ShowRoute';

const Container = styled.header `
  display: grid;
  grid-template-columns: minmax(10px, 1fr) [inner-start] minmax(0, 90rem) [inner-end] minmax(30px, 1fr);
  height: 96px;
  background-color: ${Colors.black};
`;
  
const ContainerInner = styled.div `
  grid-column: inner;
`;


const Header = () => {
  return (
    <>
      <Container>
        <ContainerInner>
          <Nav />
        </ContainerInner>
      </Container>
    </>

  )
}

export default Header