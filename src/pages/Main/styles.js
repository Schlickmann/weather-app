import styled from 'styled-components';
import { MdLocationSearching } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 900px;
  margin: auto;
`;

export const Button = styled.button`
  background-color: ${props => (props.theme === 'light' ? '#222' : '#E1C319')};
  border: 0;
  border-radius: 4px;
  padding: 10px;
`;

export const Icon = styled(MdLocationSearching).attrs(props => ({
  color: props.theme === 'light' ? '#E1C319' : '#222',
  size: 24,
}))``;
