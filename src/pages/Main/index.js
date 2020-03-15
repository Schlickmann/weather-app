import React, { useContext } from 'react';
import { WiCelsius, WiFahrenheit } from 'react-icons/wi';

import { weatherContext } from '../../contexts/Weather';
import { themeContext } from '../../contexts/Theme';
import Loading from '../../components/Loading';
import ThemeToggler from '../../components/ThemeToggler';

import {
  Container,
  Header,
  Logo,
  Content,
  Button,
  Icon,
  Select,
  List,
} from './styles';

export default function Main() {
  const { findMeRequest, loading, weather } = useContext(weatherContext);
  const { theme } = useContext(themeContext);

  function handleFindMeRequest() {
    findMeRequest();
  }

  return (
    <Container theme={theme}>
      <Header theme={theme}>
        <Logo theme={theme} />
        <div>
          <ThemeToggler />
          <span>{theme}</span>
        </div>
      </Header>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Content>
            <header>
              <input
                type="text"
                placeholder="Inform the city...e.g. Vancouver"
              />
              <Button type="button" onClick={handleFindMeRequest} theme={theme}>
                <Icon theme={theme} />
              </Button>
              <Select id="units">
                <option value="">℉</option>
                <option value="metric">°C</option>
              </Select>
            </header>
            <List>
              {weather.map(day => (
                <li key={String(day.dt)}>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
                    alt={day.weather.description}
                  />
                  <strong>{new Date(day.dt)}</strong>
                </li>
              ))}
            </List>
          </Content>
        </>
      )}
    </Container>
  );
}
