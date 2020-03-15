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
  height: 150px;
  max-height: 150px;
  margin: 2rem 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 600px;
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
        margin-right: 10px;

        &::placeholder {
          color: #999;
        }
      }
    }
  }
`;

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

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 30px;

  li {
    padding: 20px;
    width: 180px;
    border-radius: 4px;
    background: ${props => (props.theme === 'light' ? '#222' : '#eead2d')};

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      strong {
        text-align: center;
        display: block;
        color: #f0f0f0;
        font-size: 20px;
        font-weight: normal;
      }
      span {
        text-align: center;
        display: block;
        color: ${props => (props.theme === 'light' ? '#eead2d' : '#222')};
        margin-top: 3px;
      }
      div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: row;
        margin-top: 20px;

        span {
          width: 60px;
          font-size: 16px;
          border-radius: 4px;
          padding: 5px;
          background-color: #f0f0f0;

          color: ${props => (props.theme === 'light' ? '#222' : '#eead2d')};

          &:first-child {
            background-color: ${props =>
              props.theme === 'light' ? '#eead2d' : '#222'};
            color: ${props => (props.theme === 'light' ? '#222' : '#eead2d')};
          }
        }
      }
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
    color: ${props => (props.theme === 'light' ? '#222' : '#eead2d')};
    font-size: 24px;
    margin: 0 15px;
  }
`;

export const IconPrevDate = styled(MdChevronLeft).attrs(props => ({
  color: props.theme === 'light' ? '#222' : '#eead2d',
  size: 36,
}))``;

export const IconNextDate = styled(MdChevronRight).attrs(props => ({
  color: props.theme === 'light' ? '#222' : '#eead2d',
  size: 36,
}))``;
