import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import styled from 'styled-components';
import { Header } from './Header';
import { Page } from './Page';

const Footer = styled.div`
  display: flex;
  background-color: #fff;
  padding: 10px 25px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  font-size: 12px;
  line-height: 17px;
  min-width: 1180px;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
`;

const Container = styled.div`
  flex-direction: column;
  width: 100%;
  background: #f0f2f3;
`;
const App = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Page />
        <Footer>
          <div>
            <div>Оферета</div>
          </div>
        </Footer>
      </Container>
    </Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
