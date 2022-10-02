import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <Logo>Mokoji.</Logo>
      </Link>
    </Container>
  );
};

export default Footer;
