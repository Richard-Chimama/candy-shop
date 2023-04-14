import React from 'react'
import styled from 'styled-components'

const Container = styled.section `
  display: grid;
  grid-template-columns: minmax(30px, 1fr) [inner-start] minmax(0, 70rem) [inner-end] minmax(30px, 1fr);
  height: 300px;
`;
  
const ContainerInner = styled.div `
  grid-column: inner;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyRight = styled.p `
  font-family: roboto;
`;


const Footer = () => {
  return (
    <Container>
      <ContainerInner>
        <div>
          <CopyRight>&copy; Copyright, Candy shop 2023</CopyRight>
        </div>
      </ContainerInner>
    </Container>
  )
}

export default Footer