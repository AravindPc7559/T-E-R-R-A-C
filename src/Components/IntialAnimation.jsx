import { Container } from '@chakra-ui/react';
import React from 'react';
import './IntialStyle.css'


export default function InitialAnimation() {
  return (
    <Container
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <div className="wrapper">
    <div className="typing-demo">
      Hello! Welcome To <span>T E R R A C</span>.
    </div>
</div>
    </Container>
  );
}
