import React, { useContext } from 'react';

import { weatherContext } from '../../contexts/Weather';
import { themeContext } from '../../contexts/Theme';
import Loading from '../../components/Loading';
import ThemeToggler from '../../components/ThemeToggler';

import { Container, Header, Button, Icon } from './styles';

export default function Main() {
  const { findMeRequest, loading } = useContext(weatherContext);
  const { theme } = useContext(themeContext);

  function handleFindMeRequest() {
    findMeRequest();
  }

  return (
    <Container theme={theme}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header theme={theme}>
            <ThemeToggler />
            <span>{theme}</span>
          </Header>
          <div>
            <Button type="button" onClick={handleFindMeRequest} theme={theme}>
              <Icon theme={theme} />
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}
