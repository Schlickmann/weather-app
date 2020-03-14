import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

import loadingDark from '../../assets/weather-dark.svg';
import loadingLight from '../../assets/weather-light.svg';

const rotate = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img.attrs(props => ({
  src: props.theme === 'light' ? loadingLight : loadingDark
}))`
  max-height: 200px;
  margin-bottom: 50px;
`;


export const Spinner = styled(FaSpinner).attrs(props => ({
  color: props.theme === 'light' ? '#222' : '#E1C319',
  size: 30,
}))`
  animation: ${rotate} 2s infinite;
`;