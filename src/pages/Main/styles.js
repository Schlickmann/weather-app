import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import logoDark from '../../assets/logo-dark.svg';
import logoLight from '../../assets/logo-light.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  height: 100%;
  overflow: auto;
  background: ${props =>
    props.theme === 'dark'
      ? 'linear-gradient(180deg, rgba(24,17,110,1) 0%, rgba(17,45,110,1) 35%, rgba(17,76,110,1) 100%)'
      : 'linear-gradient(180deg, rgba(238,173,45,1) 0%, rgba(238,201,45,1) 35%, rgba(238,221,45,1) 100%)'};
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
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
  width: 100%;
  max-width: 600px;
  margin: auto;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 360px;

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
        height: 44px;
        color: #222;

        &::placeholder {
          color: #999;
        }
      }

      > div {
        display: flex;
      }
    }
  }

  @media (max-width: 440px) {
    header {
      form {
        flex-direction: column;

        input {
          display: block;
          margin-bottom: 15px;
        }

        > div {
          height: 44px;
          justify-content: center;
        }
      }
    }
  }
`;

export const CurrentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 30px;
  border-radius: 4px;
  width: 100%;
  max-width: 360px;
  background: linear-gradient(
    180deg,
    rgba(208, 208, 208, 1) 0%,
    rgba(240, 240, 240, 1) 45%,
    rgba(255, 255, 255, 1) 100%
  );
  color: #222;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  > strong {
    display: block;
    width: 100%;
    padding-left: 20px;
    font-size: 30px;
    font-weight: normal;
  }

  > span {
    display: block;
    width: 100%;
    padding-left: 20px;
    line-height: 1.5;

    strong {
      margin-right: 5px;
    }
  }

  > div {
    display: flex;
    align-items: center;

    > img {
      height: 80px;
    }

    span {
      font-size: 20px;
      font-weight: 600;
      text-transform: capitalize;
    }

    &:last-child {
      justify-content: space-evenly;
      padding-top: 10px;

      span {
        text-align: center;
        font-size: 24px;
        border-radius: 4px;
        padding: 10px;
        background-color: ${props =>
          props.theme === 'light' ? '#222' : '#eead2d'};
        width: 40%;

        color: ${props => (props.theme === 'light' ? '#eead2d' : '#222')};

        &:first-child {
          background-color: ${props =>
            props.theme === 'light' ? '#eead2d' : '#222'};
          color: ${props => (props.theme === 'light' ? '#222' : '#eead2d')};
        }
      }
    }
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
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);

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

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`;

export const DateHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 360px;
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
