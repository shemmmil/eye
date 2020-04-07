import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { Header } from './Header';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
