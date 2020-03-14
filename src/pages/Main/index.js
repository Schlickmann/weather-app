import React, { useContext } from 'react';


import { weatherContext } from '../../contexts/Weather';
import Loading from '../../components/Loading';

import { Container, Button, Icon } from './styles';

export default function Main() {
  const { findMeRequest, loading } = useContext(weatherContext);

  function handleFindMeRequest() {
    findMeRequest();
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Button type="button" onClick={handleFindMeRequest} theme="light" >
          <Icon theme="light" />
        </Button>
      )}
    
    </Container>
  );
}
