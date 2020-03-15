import styled from 'styled-components';
import {
  MdLocationSearching,
  MdChevronLeft,
  MdChevronRight,
} from 'react-icons/md';

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
  display: block;
  max-height: 150px;
  margin: 2rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: ${props => (props.theme === 'light' ? '#222' : '#E1C319')};
  color: ${props => (props.theme === 'light' ? '#E1C319' : '#222')};
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
  flex-wrap: wrap;
  margin-top: 30px;

  li {
    padding: 20px;
    border-radius: 4px;
    background: ${props => (props.theme === 'light' ? '#222' : '#E1C319')};

    strong {
      display: block;
      color: #f0f0f0;
      font-size: 20px;
      font-weight: normal;
    }
    span {
      display: block;
      color: ${props => (props.theme === 'light' ? '#E1C319' : '#222')};
      margin-top: 3px;
    }
  }
`;

export const DateHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;

  button {
    border: 0;
    background: none;
  }
  strong {
    color: ${props => (props.theme === 'light' ? '#222' : '#E1C319')};
    font-size: 24px;
    margin: 0 15px;
  }
`;

export const IconPrevDate = styled(MdChevronLeft).attrs(props => ({
  color: props.theme === 'light' ? '#222' : '#E1C319',
  size: 36,
}))``;

export const IconNextDate = styled(MdChevronRight).attrs(props => ({
  color: props.theme === 'light' ? '#222' : '#E1C319',
  size: 36,
}))``;
