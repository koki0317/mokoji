import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #97c8eb;
`;

const Logo = styled.h1`
  padding: 10px 0;
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
