import React from 'react';
import styled from 'styled-components';
import { Radio, Input } from 'antd';
import { Table } from './Table';

const { Search } = Input;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 24px 40px 36px;
  width: 1100px;
  min-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  background: #f0f2f3;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SearchPoll = styled.div`
  margin-top: 24px;
`;

export const Page: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="a">Черновики</Radio.Button>
          <Radio.Button value="b">На модерации</Radio.Button>
          <Radio.Button value="c">Активные</Radio.Button>
          <Radio.Button value="d">Приостановленные</Radio.Button>
          <Radio.Button value="e">Остановленные</Radio.Button>
          <Radio.Button value="f">Закрытые</Radio.Button>
        </Radio.Group>
        <SearchPoll>
          <Search enterButton allowClear />
        </SearchPoll>
        <Table />
      </Content>
    </Wrapper>
  );
};
