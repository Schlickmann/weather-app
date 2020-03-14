import React from 'react';

import { Container, Image, Spinner } from './styles';

export default function Loading() {
  return (
    <Container>
      <Image theme='light' />
      <Spinner theme='light' />
    </Container>
  );
}
