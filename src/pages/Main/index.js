import React, { useContext, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';

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
  DateHeader,
  IconPrevDate,
  IconNextDate,
  List,
} from './styles';

export default function Main() {
  const {
    weatherRequest,
    setField,
    loading,
    weather,
    unit,
    city,
    date,
  } = useContext(weatherContext);
  const { theme } = useContext(themeContext);

  const dateFormatted = useMemo(() => format(date, 'yyyy/MM/dd'), [date]);
  const dateFormattedHeader = useMemo(() => format(date, 'MMMM do'), [date]);

  function handleWeatherRequest(event) {
    event.preventDefault();

    weatherRequest(city, unit);
  }

  function handleFieldChange(event) {
    setField(event.target.id, event.target.value);
  }

  function handlePreviousDay() {
    if (dateFormatted === format(new Date(), 'yyyy/MM/dd')) return;

    setField('date', subDays(date, 1));
  }

  function handleNextDay() {
    if (dateFormatted === format(addDays(new Date(), 5), 'yyyy/MM/dd')) return;

    setField('date', addDays(date, 1));
  }

  return (
    <Container theme={theme}>
      <Header theme={theme}>
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
            <Logo theme={theme} />
            <header>
              <form onSubmit={handleWeatherRequest}>
                <input
                  id="city"
                  type="text"
                  placeholder="Inform the city...e.g. Vancouver"
                  value={city}
                  onChange={handleFieldChange}
                />
                <Select
                  id="unit"
                  value={unit}
                  theme={theme}
                  onChange={handleFieldChange}
                >
                  <option value="">℉</option>
                  <option value="metric">°C</option>
                </Select>
                <Button
                  type="submit"
                  onClick={handleWeatherRequest}
                  theme={theme}
                >
                  <Icon theme={theme} />
                </Button>
              </form>
            </header>
            <DateHeader theme={theme}>
              <button type="button" onClick={handlePreviousDay}>
                <IconPrevDate theme={theme} />
              </button>
              <strong>{dateFormattedHeader}</strong>
              <button type="button" onClick={handleNextDay}>
                <IconNextDate theme={theme} />
              </button>
            </DateHeader>
            <List theme={theme}>
              {weather.map(
                day =>
                  day.day_formatted === dateFormatted && (
                    <li key={String(day.dt)}>
                      <div>
                        <img
                          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                          alt={day.weather[0].description}
                        />
                        <span>{day.weather[0].main}</span>
                      </div>
                      <strong>
                        {day.time} <span>{day.day_formatted}</span>
                      </strong>
                    </li>
                  )
              )}
            </List>
          </Content>
        </>
      )}
    </Container>
  );
}
