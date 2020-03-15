import React, { useContext, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';

import { weatherContext } from '../../contexts/Weather';
import { themeContext } from '../../contexts/Theme';
import Loading from '../../components/Loading';
import ThemeToggler from '../../components/ThemeToggler';
import Form from '../../components/Form';

import {
  Container,
  Header,
  Logo,
  Content,
  DateHeader,
  IconPrevDate,
  IconNextDate,
  CurrentInfo,
  List,
} from './styles';

export default function Main() {
  const { setField, loading, weather, current, date } = useContext(
    weatherContext
  );
  const { theme } = useContext(themeContext);

  const dateFormatted = useMemo(() => format(date, 'yyyy/MM/dd'), [date]);
  const dateFormattedHeader = useMemo(() => format(date, 'MMMM do'), [date]);

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
              <Form />
            </header>

            {current && (
              <CurrentInfo theme={theme}>
                <div>
                  <img
                    src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                    alt={current.weather[0].description}
                  />
                  <span>{current.weather[0].description}</span>
                </div>
                <strong>{current.main.temp}&deg;</strong>
                <span>
                  <strong>Humidity:</strong>
                  {current.main.humidity}
                </span>
                <span>
                  <strong>Pressure:</strong>
                  {current.main.pressure}
                </span>
                <span>
                  <strong>Wind Speed: </strong>
                  {current.wind.speed}
                </span>

                <div>
                  <span>{current.main.temp_max}</span>
                  <span>{current.main.temp_min}</span>
                </div>
              </CurrentInfo>
            )}
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
                        <strong>
                          {day.time} <span>{day.day}</span>
                        </strong>
                        <img
                          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                          alt={day.weather[0].description}
                        />
                        <span>{day.weather[0].main}</span>
                        <div>
                          <span>{day.main.temp_max}</span>
                          <span>{day.main.temp_min}</span>
                        </div>
                      </div>
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
