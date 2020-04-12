import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Money } from './Money';

const Container = styled.div`
  width: 100%;
  color: #000;
  font-size: 15px;
  background-color: #fff;
`;
const Content = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding-right: 25px;
`;
const Logo = styled.div`
  width: 100px;
  height: 70px;
  background-color: pink;
`;
const Middle = styled.div`
  width: 100%;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Item = styled.li`
  display: inline-block;

  & + li {
    margin-left: 32px;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const CreateButton = styled(Button)`
  margin-right: 32px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: #fff;
`;

const UserName = styled.span`
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Middle>
          <List>
            <Item>Мои опросы</Item>
            <Item>Помощь</Item>
            <Item>Оставить отзыв</Item>
            <Item>Блог</Item>
            <Item>Мой профиль</Item>
          </List>
        </Middle>
        <Navigation>
          <CreateButton type="primary" data-button="create-a-survey">
            Создать опрос
          </CreateButton>
          <Money />
          <User>
            <Avatar>
              <UserOutlined />
            </Avatar>
            <UserName>beta.user</UserName>
          </User>
        </Navigation>
      </Content>
    </Container>
  );
};
