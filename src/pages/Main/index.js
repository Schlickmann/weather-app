import React, { useContext } from 'react';

import { weatherContext } from '../../contexts/Weather';
import { themeContext } from '../../contexts/Theme';
import Loading from '../../components/Loading';
import ThemeToggler from '../../components/ThemeToggler';

import { Container, Header, Content, Button, Icon } from './styles';

export default function Main() {
  const { findMeRequest, loading } = useContext(weatherContext);
  const { theme } = useContext(themeContext);

  function handleFindMeRequest() {
    findMeRequest();
  }

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <ThemeToggler />
        <span>{theme}</span>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Content>
            <Button type="button" onClick={handleFindMeRequest} theme={theme}>
              <Icon theme={theme} />
            </Button>
          </Content>
        </>
      )}
    </Container>
  );
}
