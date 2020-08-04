import styled from 'styled-components';
import Font from './FiraCode-Medium.ttf';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin: 5%;
  margin-left: 0;

  @media (max-width: 500px) {
    margin: 0;
    width: 100%;
    padding: 5%;
    padding-bottom: 0;

    img {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100%;
  @media (max-width: 500px) {
    width: 100%;
    padding: 5%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  padding: 3%;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    padding: 0%;
  }
/** Fundo "#273746 " */
  ::before {
    content: '';
    position: absolute;
    background-color: #273746;
    width: 50%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    left: 0;

    @media (max-width: 500px) {
      position: relative;
    }
  }
`;

export const FirstContent = styled.div`
  text-align: center;
  width: 49%;
  z-index: 10;
  background-color: #273746;
  color: #fff;

  h2 {
    font-size: 28px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
    line-height: 30px;
  }
  @media (max-width: 500px) {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

export const SecondContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;

  input,
  select {
    height: 40px;
    width: 100%;
    border: none;
    background-color: #ecf0f9;
    padding: 3%;
    :hover {
      background-color: #e3effa;
    }
  }
  label {
    display: flex;
    margin: 3%;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  display: block;
  min-width: 120px;
  border: none;
  background-color: #273746;
  color: white;
  border-radius: 10px;
  margin: 5%;
  padding: 8px;
  font-size: 16px;
`;

export const Results = styled.div`
  @font-face {
    font-family: 'Font';
    src: url(${Font});
  }

  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 5%;
  font-size: 100%;
  /** FaleMais - Telzir */
  strong {
    color: #273746;
  }

  span {
    font-family: Font;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
    margin-top: 1%;
    font-size: 100%;
  }
`;