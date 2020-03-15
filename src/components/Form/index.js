import React, { useContext } from 'react';

import { weatherContext } from '../../contexts/Weather';
import { themeContext } from '../../contexts/Theme';

import { Button, Select, Icon } from './styles';

export default function Form() {
  const { weatherRequest, setField, unit, city } = useContext(weatherContext);
  const { theme } = useContext(themeContext);

  function handleWeatherRequest(event) {
    event.preventDefault();

    weatherRequest(city, unit);
  }

  function handleFieldChange(event) {
    setField(event.target.id, event.target.value);
  }

  return (
    <form onSubmit={handleWeatherRequest}>
      <input
        id="city"
        type="text"
        placeholder="Inform the city...e.g. Vancouver"
        value={city}
        onChange={handleFieldChange}
      />
      <div>
        <Select
          id="unit"
          value={unit}
          theme={theme}
          onChange={handleFieldChange}
        >
          <option value="">℉</option>
          <option value="metric">°C</option>
        </Select>
        <Button type="submit" onClick={handleWeatherRequest} theme={theme}>
          <Icon theme={theme} />
        </Button>
      </div>
    </form>
  );
}
