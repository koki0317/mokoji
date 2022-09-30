import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
`;

const Logo = styled.h1`
  padding: 15px 0;
  color: white;
`;

const Footer = () => {
  return (
    <Container>
      <Logo>Mokoji.</Logo>
    </Container>
  );
};

export default Footer;
