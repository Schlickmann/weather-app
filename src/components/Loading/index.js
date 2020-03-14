import React, { useContext } from 'react';

import { themeContext } from '../../contexts/Theme';

import { Container, Image, Spinner } from './styles';

export default function Loading() {
  const { theme } = useContext(themeContext);
  return (
    <Container>
      <Image theme={theme} />
      <Spinner theme={theme} />
    </Container>
  );
}
