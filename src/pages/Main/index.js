import React, { useContext } from 'react';
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
  const { weatherRequest, setField, loading, weather, unit, city } = useContext(
    weatherContext
  );
  const { theme } = useContext(themeContext);

  function handleWeatherRequest(event) {
    event.preventDefault();

    weatherRequest(city);
  }

  function handleFieldChange(event) {
    setField(event.target.id, event.target.value);
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
              <form onSubmit={handleWeatherRequest}>
                <input
                  id="city"
                  type="text"
                  placeholder="Inform the city...e.g. Vancouver"
                  value={city}
                  onChange={handleFieldChange}
                />
                <Button
                  type="submit"
                  onClick={handleWeatherRequest}
                  theme={theme}
                >
                  <Icon theme={theme} />
                </Button>
                <Select id="unit" value={unit} onChange={handleFieldChange}>
                  <option value="">℉</option>
                  <option value="metric">°C</option>
                </Select>
              </form>
            </header>
            <List>
              {weather.map(day => (
                <li key={String(day.dt)}>
                  <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    alt={day.weather.description}
                  />
                  <strong>{day.dt_txt}</strong>
                </li>
              ))}
            </List>
          </Content>
        </>
      )}
    </Container>
  );
}
