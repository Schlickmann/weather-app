import styled from 'styled-components';
import { MdLocationSearching } from 'react-icons/md';

import logoDark from '../../assets/logo-dark.svg';
import logoLight from '../../assets/logo-light.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: ${props =>
    props.theme === 'dark'
      ? 'linear-gradient(180deg, rgba(24,17,110,1) 0%, rgba(17,45,110,1) 35%, rgba(17,76,110,1) 100%)'
      : 'linear-gradient(180deg, rgba(238,173,45,1) 0%, rgba(238,201,45,1) 35%, rgba(238,221,45,1) 100%)'};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    height: 100%;

    span {
      padding: 1rem;
      font-size: 1.2rem;
      text-transform: capitalize;
      color: ${props => (props.theme === 'dark' ? '#fff' : '#222')};
    }
  }
`;

export const Logo = styled.img.attrs(props => ({
  src: props.theme === 'light' ? logoLight : logoDark,
}))`
  max-height: 100px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 900px;
  margin: auto;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 360px;

    form {
      height: 100%;
      width: 100%;
      display: flex;

      input {
        height: 100%;
        border: 0;
        border-radius: 4px;
        width: 100%;
        padding-left: 10px;

        &::placeholder {
          color: #999;
        }
      }
    }
  }
`;

export const Button = styled.button`
  background-color: ${props => (props.theme === 'light' ? '#222' : '#E1C319')};
  border: 0;
  border-radius: 4px;
  padding: 0 8px;
  height: 100%;
  margin-left: 10px;
  color: ${props => (props.theme === 'light' ? '#E1C319' : '#222')};
`;

export const Icon = styled(MdLocationSearching).attrs(props => ({
  color: props.theme === 'light' ? '#E1C319' : '#222',
  size: 24,
}))``;

export const Select = styled.select`
  height: 100%;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const List = styled.ul`
  display: flex;
`;
