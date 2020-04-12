import React from 'react';
import { Table as AntdTable } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 12px;
`;

const columns = [
  {
    title: 'Название',
    name: 'title',
    key: 'title',
  },
  {
    title: 'Ответов',
    name: 'answers',
    key: 'answers',
  },
  {
    title: 'Стоимость',
    name: 'cost',
    key: 'cost',
  },
  {
    title: 'Статус',
    name: 'status',
    key: 'status',
  },
  {
    title: 'Создан',
    name: 'created',
    key: 'created',
  },
];
const EmptyText = () => <div>У вас нет таких опросов</div>;
const obj = {
  emptyText: EmptyText,
};
export const Table: React.FC = () => {
  return (
    <Container>
      <AntdTable columns={columns} locale={obj} />
    </Container>
  );
};
