import React from "react";
import styled from "styled-components";
import Colors from "../Theme";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const ShowRoute = ({ route, navigateTO }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>{route}</div>
      {navigateTO && (
        <Button onClick={() => navigate(navigateTO)}>
          <TiArrowBack color={Colors.white} size={20} />
          Back
        </Button>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 40px;
  border: 1px solid ${Colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.color3};
  color: ${Colors.white};
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 8px;
  font-weight: 600;
  font-family: Roboto;
`;

const Button = styled.button`
  background-color: transparent !important;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  font-family: Roboto;
  font-weight: 600;
`;

export default ShowRoute;
