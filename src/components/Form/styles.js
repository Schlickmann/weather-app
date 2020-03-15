import styled from 'styled-components';
import { MdLocationSearching } from 'react-icons/md';

export const Button = styled.button`
  background-color: ${props => (props.theme === 'light' ? '#222' : '#eead2d')};
  border: 0;
  border-radius: 4px;
  padding: 0 8px;
  height: 100%;
  margin-left: 10px;
  color: ${props => (props.theme === 'light' ? '#eead2d' : '#222')};

  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled(MdLocationSearching).attrs(props => ({
  color: props.theme === 'light' ? '#eead2d' : '#222',
  size: 24,
}))``;

export const Select = styled.select`
  display: block;
  height: 100%;
  width: 44px;
  line-height: 1.3;
  padding: 0 12px;
  border: none;
  border-radius: 4px;
  -webkit-appearance: none;
  background-color: ${props => (props.theme === 'light' ? '#222' : '#eead2d')};
  color: ${props => (props.theme === 'light' ? '#eead2d' : '#222')};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &::-ms-expand {
    display: none;
  }

  option {
    font-weight: normal;
  }
`;
