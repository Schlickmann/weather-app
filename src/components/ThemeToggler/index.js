import React, { useContext } from 'react';
import { themeContext } from '../../contexts/Theme';

import { Toggler, Switch, Span } from './styles';

export default function ThemeToggler() {
  const { setThemeRequest, theme } = useContext(themeContext);

  function handleThemeChange(event) {
    const newTheme = event.target.checked ? 'dark' : 'light';

    setThemeRequest(newTheme);
  }

  return (
    <Toggler>
      <Switch onClick={handleThemeChange} />
      <Span theme={theme} />
    </Toggler>
  );
}
